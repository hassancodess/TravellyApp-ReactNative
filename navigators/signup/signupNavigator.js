import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import Signup1 from '../../screens/signup/Signup1'
import Signup2 from '../../screens/signup/Signup2'
import Signup3 from '../../screens/signup/Signup3'
import Signup4 from '../../screens/signup/Signup4'
const Stack = createNativeStackNavigator()
const index = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Signup1'
    >
      <Stack.Screen name='Signup1' component={Signup1} />
      <Stack.Screen name='Signup2' component={Signup2} />
      <Stack.Screen name='Signup3' component={Signup3} />
      <Stack.Screen name='Signup4' component={Signup4} />
    </Stack.Navigator>
  )
}

export default index
