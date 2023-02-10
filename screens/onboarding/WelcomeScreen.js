import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import Logo from '../../assets/logo.png'
// Components
import Button from '../../components/shared/Button'
// Navigation
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View className='flex-1 flex-col items-center justify-around px-4 py-10'>
      {/* Logo Container*/}
      <View className='flex-col items-center w-full'>
        <Text className='text-2xl font-psemibold text-green700 mb-10'>
          Welcome to
        </Text>
        <View className='w-52 h-52 '>
          <Image
            source={Logo}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
      </View>
      {/* Buttons Container */}
      <View className='w-full '>
        <Button title='Sign Up' bgColor='bg-peach300' txtColor='text-white' />
        <Button title='Login' bgColor='bg-white' txtColor='text-peach300' />
      </View>
    </View>
  )
}

export default WelcomeScreen
