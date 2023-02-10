import { Pressable } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
// import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const StyledPressable = styled(Pressable)

const IconButton = ({ icon, onPress, styles, iconColor, size }) => {
  return (
    <StyledPressable
      className={`p-5 bg-peach300 rounded-3xl ${styles}`}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={size} color={iconColor} />
    </StyledPressable>
  )
}

export default IconButton
