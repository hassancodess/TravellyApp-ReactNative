import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Line from '../../components/onboarding/Line'
import Container from '../../components/shared/Container'
import Button from '../../components/shared/Button'
import { Entypo } from '@expo/vector-icons'

const Signup2 = () => {
  return (
    <Container styles='justify-between'>
      <View className='flex flex-col items-center w-full h-full'>
        {/* Header */}
        <View className='mb-16'>
          {/* Lines Container*/}
          <View className={`flex-row overflow-hidden justify-center`}>
            <Line variant={'primary4'} />
            <Line variant={'primary4withSpace'} />
            <Line variant={'secondary4'} />
            <Line variant={'secondary4'} />
          </View>
          {/* Back Button */}
          <View className='my-5'>
            <Entypo name='chevron-left' size={42} color='black' />
          </View>
        </View>
        {/* Text Container */}
        <View className=' flex items-center'>
          <Text className='text-2xl font-psemibold'>
            Enter the email address
          </Text>
          <Text className='text-lg font-pmedium tracking-wide'>
            This is required for identity verification
          </Text>
        </View>
        {/* Input */}
        <View className='bg-white w-full p-5 rounded-lg text-2xl mt-14 mb-10'>
          <TextInput placeholder='Email' />
        </View>
        {/* Button */}
        <Button title={'Send'} bgColor={'bg-peach300'} />
      </View>
    </Container>
  )
}

export default Signup2
