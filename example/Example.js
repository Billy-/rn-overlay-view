import React from 'react'

import { Animated, Text, TouchableHighlight, View, ScrollView } from 'react-native'

import OverlayView from '../'

class Example extends React.Component {
  state = {
    open: null,
    y: null,
  }
  render () {
    return (
      <View
        style={{ height: '100%', width:'100%' }}
      >
        <Background />
        <OverlayView onMount={({ open, y }) => this.setState({ open, y })} >
          <Overlay open={this.state.open} y={this.state.y} />
        </OverlayView>
      </View>
    )
  }
}

export default Example

const Background = () => (
  <TouchableHighlight style={{ flex: 1, height: '100%', width: '100%' }} onPress={console.log}>
    <View
      style={{
        flex: 1,
        backgroundColor: '#00f',
      }}
    />
  </TouchableHighlight>
)

const Overlay = ({ open, y }) => (
  <View>
    <Animated.View
      style={{
        opacity: y ?
          y.interpolate({
            inputRange: [-300, -150],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
          : 1
      }}
    >
      <TouchableHighlight
        style={{
          backgroundColor: '#aaf',
          marginVertical: 20,
          marginHorizontal: '20%',
        }}
        onPress={open}
      >
        <View>
          <Text style={{ textAlign: 'center' }}>Open Button Right Here</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
    <Animated.View
      style={{
        flex: 1,
        backgroundColor:'#fff',
        paddingVertical: 25,
        marginHorizontal: y ?
          y.interpolate({
            inputRange: [-300, -150],
            outputRange: [0, 10],
            extrapolate: 'clamp',
          })
          : 10,
        paddingHorizontal: y ?
          y.interpolate({
            inputRange: [-300, -150],
            outputRange: [25, 15],
            extrapolate: 'clamp',
          })
          : 15,
      }}
    >
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <ScrollView horizontal pagingEnabled>
        <View style={{ width: 200, height: 100, backgroundColor: '#cc00cc' }}>
          <Text>Wassup</Text>
        </View>
        <View style={{ width: 200, height: 100, backgroundColor: '#cc00cc' }}>
          <Text>Wassup</Text>
        </View>
        <View style={{ width: 200, height: 100, backgroundColor: '#cc00cc' }}>
          <Text>Wassup</Text>
        </View>
        <View style={{ width: 200, height: 100, backgroundColor: '#cc00cc' }}>
          <Text>Wassup</Text>
        </View>
        <View style={{ width: 200, height: 100, backgroundColor: '#cc00cc' }}>
          <Text>Wassup</Text>
        </View>
        <View style={{ width: 200, height: 100, backgroundColor: '#cc00cc' }}>
          <Text>Wassup</Text>
        </View>
        <View style={{ width: 200, height: 100, backgroundColor: '#cc00cc' }}>
          <Text>Wassup</Text>
        </View>
        <View style={{ width: 200, height: 100, backgroundColor: '#cc00cc' }}>
          <Text>Wassup</Text>
        </View>
      </ScrollView>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
      <Text>Wassup</Text>
    </Animated.View>
  </View>
)
