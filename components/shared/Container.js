import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Container = ({ children, styles }) => {
  return (
    <View
      className={`flex-1 flex-col justify-between items-center px-4 my-10 ${styles}`}
    >
      {children}
    </View>
  )
}

export default Container

const styles = StyleSheet.create({})
