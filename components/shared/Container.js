import React from 'react'
import { Text, View } from 'react-native'
import { styled } from 'nativewind'

const StyledView = styled(View)

const Container = ({ children, styles }) => {
  return (
    <StyledView className={`flex-1 flex-col items-center px-4 py-10 ${styles}`}>
      {children}
    </StyledView>
  )
}

export default Container
