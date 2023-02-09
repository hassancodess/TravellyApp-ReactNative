import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
// Navigators
import OnboardingNavigator from './navigators/onboarding/OnboardingNavigator'

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
          <OnboardingNavigator />
        </NavigationContainer>
      </View>
      {/* <View
        className='flex-1 items-center justify-center bg-slate-900'
        onLayout={onLayoutRootView}
      >
        <Text className='text-9xl font-psemibold p-3'>
          Open up App.js to start working on your app!
        </Text>
      </View> */}
    </>
  )
}
