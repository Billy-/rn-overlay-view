import React from 'react'
import { StyleSheet, Text, View, Animated, ScrollView, TouchableHighlight } from 'react-native'

import Example from './Example'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Example />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
