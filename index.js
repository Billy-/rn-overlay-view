import React from 'react'
import { number, bool, func } from 'prop-types'
import { View, Animated, PanResponder, Easing, StyleSheet } from 'react-native'

class OverlayView extends React.Component {
  constructor (props) {
    super(props)
    this.onLayout = this.onLayout.bind(this)
    this.setY = this.setY.bind(this)
    this.springTo = this.springTo.bind(this)
    this.easeTo = this.easeTo.bind(this)
    this.open = this.open.bind(this)
    this.getPeekAmount = this.getPeekAmount.bind(this)
    this.clampY = this.clampY.bind(this)
    this.snapY = this.snapY.bind(this)
  }
  state = {
    y: new Animated.Value(0),
  }

  scrollY = 0
  height = -1

  getPeekAmount () {
    return this.height < this.props.peekAmount
      ? -this.height
      : -this.props.peekAmount
  }

  clampY (y) {
    return clamp(
      y,
      -this.height,
      this.getPeekAmount(),
    )
  }

  snapY (y) {
    const { snapThreshold, openAmount } = this.props
    const wasOpen = this.scrollY <= -openAmount
    const couldSnapOpen = (
      !wasOpen // Was closed,
      && y < this.getPeekAmount() - snapThreshold // Threshold breached
      && y > -openAmount // Target y is not fully open
    ) || (
      wasOpen // Was open,
      && y > -openAmount // Isn't still fully open
      && y < -openAmount + snapThreshold // Threshold not breached
    )
    const couldSnapClosed = (
      wasOpen // Was open
      && y > -openAmount + snapThreshold // Threshold breached
    ) || (
      !wasOpen // Was closed
      && y > this.getPeekAmount() - snapThreshold // Didn't breach threshold
    )

    if (couldSnapOpen) {
      return this.clampY(-openAmount)
    } else if (couldSnapClosed) {
      return this.getPeekAmount()
    }
    return y
  }

  setY (y) {
    this.state.y.setValue(y)
  }

  springTo (y) {
    this.scrollY = y
    Animated.spring(
      this.state.y,
      {
        toValue: y,
      },
    ).start()
  }

  easeTo (y) {
    this.scrollY = y
    Animated.timing(
      this.state.y,
      {
        toValue: y,
        duration: 250,
        easing: Easing.out(Easing.ease),
      },
    ).start()
  }

  open (springBack) {
    if (springBack || this.scrollY > -this.props.openAmount) {
      this.springTo(this.clampY(-this.props.openAmount))
    }
  }

  onLayout (e) {
    const firstLayout = this.height === -1
    this.height = e.nativeEvent.layout.height
    if (firstLayout) {
      const newScrollY = this.getPeekAmount()
      if (this.props.animateIn) {
        this.springTo(newScrollY)
      } else {
        this.scrollY = newScrollY
        this.setY(newScrollY)
      }

    }
  }

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => true,
    onMoveShouldSetPanResponderCapture: () => false,
    onPanResponderMove: (_, gestureState) => {
      const { dy } = gestureState
      let newY = this.scrollY + dy
      const clamped = this.clampY(newY)

      if (newY !== clamped) {
        const pastBounds = newY - clamped
        // Drag past bounds at half speed
        newY = clamped + (pastBounds / 2)
      }

      this.setY(newY)
    },
    onPanResponderRelease: (_, gesture) => {
      const { dy, vy } = gesture
      const { snap } = this.props
      const overScroll = vy * 175
      const newScrollY = this.clampY(this.scrollY + dy + overScroll)

      if (snap) {
        this.springTo(this.snapY(newScrollY))
      } else {
        this.easeTo(newScrollY)
      }
    },
  })

  render () {
    const { props, state } = this
    const { children } = props
    const { y } = state
    const stateStyles = {
      transform: [{translateY: y}],
    }
    return (
      <Animated.View
        style={[styles.container,  stateStyles]}
        onLayout={this.onLayout}
        {...this.panResponder.panHandlers}
      >
        {children}
      </Animated.View>
    )
  }
}

OverlayView.propTypes = {
  peekAmount: number,
  openAmount: number,
  animateIn: bool,
  snap: bool,
  snapThreshold: number,
  onScroll: func,
}

OverlayView.defaultProps = {
  peekAmount: 80,
  openAmount: 550,
  animateIn: true,
  snap: true,  
  snapThreshold: 100,
  onScroll: undefined,
}

export default OverlayView

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '100%',
  }
})

const clamp = (x, lower, upper) => Math.max(Math.min(x, upper), lower)
