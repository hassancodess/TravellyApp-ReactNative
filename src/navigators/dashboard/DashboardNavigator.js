import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import Home from '../../screens/dashboard/Home'
import Notifications from '../../screens/dashboard/Notifications'
import Booking from '../../screens/dashboard/Booking'

const { Navigator, Screen } = createNativeStackNavigator()

const DashboardNavigator = () => {
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={Home} />
      <Screen name='Booking' component={Booking} />
      <Screen name='Notifications' component={Notifications} />
    </Navigator>
  )
}

export default DashboardNavigator
