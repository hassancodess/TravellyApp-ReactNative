import React from 'react'
import { Text, View } from 'react-native'
// Components
import Container from '../../components/shared/Container'
import Line from '../../components/onboarding/Line'
import IconButton from '../../components/shared/IconButton'
// Icons
import { Entypo } from '@expo/vector-icons'
// Constants
import { colors } from '../../../assets/Constants'

const Signup1 = () => (
  <Container styles='justify-between'>
    <View className='flex flex-col items-center '>
      <View className='mb-16'>
        {/* Lines Container*/}
        <View className={`flex-row overflow-hidden justify-center`}>
          <Line variant={'primary4'} />
          <Line variant={'secondary4'} />
          <Line variant={'secondary4'} />
          <Line variant={'secondary4'} />
        </View>
        {/* Back Button */}
        <View className='my-5'>
          <Entypo name='chevron-left' size={42} color='black' />
        </View>
      </View>
      {/* Text */}
      <View className='w-full mb-10'>
        <Text className='text-2xl text-center font-psemibold'>
          Choose the sign up method
        </Text>
      </View>
      {/* Buttons */}
      <View className='flex flex-row justify-center'>
        <IconButton icon='phone' size={40} iconColor={colors.white} />
        <IconButton
          icon='email'
          size={40}
          styles='ml-10'
          iconColor={colors.white}
        />
      </View>
    </View>
    {/* Section 2 */}
    <View className='flex items-center mb-20'>
      {/* Separator */}
      <View className='flex flex-row items-center mb-8'>
        <View className='h-0.5 w-[48%] bg-secondary'></View>
        <Text className='mx-4 text-md text-secondary'>OR</Text>
        <View className='h-0.5 w-[48%] bg-secondary'></View>
      </View>
      {/* Social Buttons */}
      <View className='flex flex-row items-center mb-8'>
        <IconButton
          icon='facebook'
          styles='bg-white'
          iconColor={colors.peach300}
          size={40}
        />
        <IconButton
          icon='google'
          styles='bg-white mx-10'
          iconColor={colors.peach300}
          size={40}
        />
        <IconButton
          icon='apple'
          styles='bg-white'
          iconColor={colors.peach300}
          size={40}
        />
      </View>
      {/* Text */}
      <Text className='text-md tracking-wider font-pregular'>
        Have an account? <Text className='text-green700'>Sign In</Text>
      </Text>
    </View>
  </Container>
)

export default Signup1
