import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Navigators
import OnboardingNavigator from './onboarding/OnboardingNavigator'
import SignupNavigator from './signup/SignupNavigator'
import DashboardNavigator from './dashboard/DashboardNavigator'

const { Navigator, Screen } = createNativeStackNavigator()
const MainNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Dashboard'
    >
      <Screen name='Onboarding' component={OnboardingNavigator} />
      <Screen name='Signup' component={SignupNavigator} />
      <Screen name='Dashboard' component={DashboardNavigator} />
    </Navigator>
  )
}

export default MainNavigator
