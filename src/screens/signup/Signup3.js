import React from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Container from '../../components/shared/Container'
import Line from '../../components/onboarding/Line'
import Button from '../../components/shared/Button'

const Signup3 = () => {
  return (
    <Container styles='justify-between'>
      <View className='flex-col items-center w-full '>
        <View className='mb-8'>
          {/* Lines Container*/}
          <View className={`flex-row overflow-hidden justify-center`}>
            <Line variant={'primary4'} />
            <Line variant={'primary4withSpace'} />
            <Line variant={'primary4withSpace'} />
            <Line variant={'secondary4'} />
          </View>
          {/* Back Button */}
          <View className='my-5'>
            <Entypo name='chevron-left' size={42} color='black' />
          </View>
        </View>
        {/* Text Container */}
        <View className='items-center gap-y-4 mb-10'>
          <Text className='text-2xl font-psemibold text-center'>
            Check your email for a configuration link
          </Text>
          <Text className='text-lg font-pmedium tracking-wide'>
            We have send the link to your email
          </Text>
        </View>
        {/* Button */}
        <View className='w-full mb-6'>
          <Button title={'Open email'} bgColor={'bg-peach300'} />
        </View>
        {/* Configuration Link */}
        <View className='items-center gap-y-2'>
          <Text className='tracking-wide text-secondary'>
            Didn't recieve a configuration link?
          </Text>
          <Text className='text-base font-pmedium text-green700'>Resend</Text>
        </View>
      </View>
    </Container>
  )
}

export default Signup3
