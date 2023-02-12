import React from 'react'
import { View } from 'react-native'

const Container = ({ children, styles }) => {
  return (
    <View className={`flex-1 flex-col items-center px-4 py-10 ${styles}`}>
      {children}
    </View>
  )
}

export default Container
