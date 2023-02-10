import React from 'react'
import { Text, View, Pressable } from 'react-native'
// Components
import Container from '../../components/shared/Container'
import Line from '../../components/onboarding/Line'
import IconButton from '../../components/shared/IconButton'
// Icons
import { Entypo } from '@expo/vector-icons'
const Signup1 = () => (
  <Container styles=''>
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
    <View className='flex flex-row w-full justify-center'>
      <IconButton icon='phone' />
      <IconButton icon='message' styles='ml-10' />
    </View>
  </Container>
)

export default Signup1
