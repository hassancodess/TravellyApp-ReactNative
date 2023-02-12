import { Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const IconButton = ({ icon, onPress, styles, iconColor, size }) => {
  return (
    <Pressable
      className={`p-5 bg-peach300 rounded-3xl ${styles}`}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={size} color={iconColor} />
    </Pressable>
  )
}

export default IconButton
