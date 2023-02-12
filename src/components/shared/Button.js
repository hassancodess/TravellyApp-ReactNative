import React from 'react'
import { Text, Pressable } from 'react-native'

const Button = ({ title, bgColor, txtColor, onPress }) => {
  return (
    <Pressable
      className={`p-5 self-stretch rounded-3xl ${bgColor}`}
      style={{ marginBottom: 20 }}
      onPress={onPress}
    >
      <Text
        className={`font-psemibold text-center text-xl text-white ${txtColor}`}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default Button
