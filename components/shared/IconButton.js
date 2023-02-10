import { Pressable } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { Entypo } from '@expo/vector-icons'

const StyledPressable = styled(Pressable)

const IconButton = ({ icon, onPress, styles }) => {
  return (
    <StyledPressable
      className={`p-7 bg-peach300 rounded-3xl ${styles}`}
      onPress={onPress}
    >
      <Entypo name={icon} size={40} color='white' />
    </StyledPressable>
  )
}

export default IconButton
