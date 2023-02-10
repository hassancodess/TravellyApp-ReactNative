import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledPressable = styled(Pressable)

const Button = ({ title, bgColor, txtColor }) => {
  return (
    <StyledPressable
      className={`p-5 self-stretch rounded-3xl ${bgColor}`}
      style={{ marginBottom: 20 }}
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
