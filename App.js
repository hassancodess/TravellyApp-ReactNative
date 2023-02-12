import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
// Navigators
import MainNavigator from './src/navigators/MainNavigator'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require('./assets/fonts/Poppins-Regular.ttf'),
    Medium: require('./assets/fonts/Poppins-Medium.ttf'),
    SemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    Bold: require('./assets/fonts/Poppins-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar style='auto' />
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </View>
    </>
  )
}
