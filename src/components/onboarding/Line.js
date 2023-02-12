import React from 'react'
import { View } from 'react-native'

const Line = ({ variant }) => {
  const variantStyles = {
    default: 'bg-white w-[33%]',
    primary: 'bg-primary w-[33%]',
    secondary: 'bg-secondary/100 w-[33%]',
    primary4: 'w-[25%] bg-primary',
    primary4withSpace: 'w-[25%] bg-primary ml-3',
    secondary4: 'bg-secondary/100 w-[25%] ml-3',
  }
  return (
    <View className={`h-0.5 rounded-full ${variantStyles[variant]}`}></View>
  )
}

export default Line
