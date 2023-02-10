import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Navigators
import OnboardingNavigator from './onboarding/OnboardingNavigator'
import SignupNavigator from './signup/signupNavigator'

const Stack = createNativeStackNavigator()
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Signup'
    >
      <Stack.Screen name='Onboarding' component={OnboardingNavigator} />
      <Stack.Screen name='Signup' component={SignupNavigator} />
    </Stack.Navigator>
  )
}

export default MainNavigator
