import React from 'react'
import { Text, Pressable } from 'react-native'
import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledPressable = styled(Pressable)

const Button = ({ title, bgColor, txtColor, onPress }) => {
  return (
    <StyledPressable
      className={`p-5 self-stretch rounded-3xl ${bgColor}`}
      style={{ marginBottom: 20 }}
      onPress={onPress}
    >
      <StyledText
        className={`font-psemibold text-center text-xl text-white ${txtColor}`}
      >
        {title}
      </StyledText>
    </StyledPressable>
  )
}

export default Button
