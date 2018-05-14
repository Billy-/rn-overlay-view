import React from 'react'

import { Animated, Text, TouchableHighlight, View, ScrollView } from 'react-native'

import OverlayView from '../'

const Example = () => (
  <View
    style={{ height: '100%', width:'100%' }}
  >
    <Background />
    <OverlayView>
      <Overlay />
    </OverlayView>
  </View>
)

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
        position: 'absolute',
        top: 0,
        opacity: y.interpolate({
          inputRange: [-300, -150],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
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
        marginHorizontal: y.interpolate({
          inputRange: [-300, -150],
          outputRange: [0, 10],
          extrapolate: 'clamp',
        }),
        paddingHorizontal: y.interpolate({
          inputRange: [-300, -150],
          outputRange: [25, 15],
          extrapolate: 'clamp',
        }),
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
