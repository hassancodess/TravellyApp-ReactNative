import { View } from 'react-native'
import React from 'react'

const Container = ({ children, styles }) => {
  return (
    <View className={`flex-1 flex-col items-center px-4 py-14 ${styles}`}>
      {children}
    </View>
  )
}

export default Container
