import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import OnboardingScreen1 from '../../screens/onboarding/OnboardingScreen1'
import OnboardingScreen2 from '../../screens/onboarding/OnboardingScreen2'
import OnboardingScreen3 from '../../screens/onboarding/OnboardingScreen3'
const Stack = createNativeStackNavigator()
const OnboardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Onboarding1' component={OnboardingScreen1} />
      <Stack.Screen name='Onboarding2' component={OnboardingScreen2} />
      <Stack.Screen name='Onboarding3' component={OnboardingScreen3} />
    </Stack.Navigator>
  )
}

export default OnboardingNavigator
