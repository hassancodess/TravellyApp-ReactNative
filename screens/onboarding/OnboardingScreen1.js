import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Illustration from '../../assets/illustrations/onboarding/Illustration-1.png'
// Components
import Line from '../../components/onboarding/Line'
// Navigation
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen1 = () => {
  const navigation = useNavigation()
  const navigateToNextScreen = () => {
    navigation.navigate('Onboarding2')
  }
  return (
    <View className='flex-1 flex-col justify-between items-center px-4 my-10'>
      {/* Lines */}
      <View className='flex-row gap-x-1 items-center overflow-hidden'>
        <View className='h-1 w-1/3 bg-primary rounded-full'></View>
        <View className='h-1 w-1/3 bg-secondary/30 rounded-full'></View>
        <View className='h-1 w-1/3 bg-secondary/30 rounded-full'></View>
      </View>
      {/* Illustration */}
      <View className='object-cover'>
        <Image source={Illustration} />
      </View>
      {/* Button */}
      <Pressable
        className='bg-peach300 p-5 self-stretch rounded-3xl'
        onPress={navigateToNextScreen}
      >
        <Text className='font-psemibold text-center text-xl text-white'>
          Next
        </Text>
      </Pressable>
    </View>
  )
}

export default OnboardingScreen1

const styles = StyleSheet.create({})
