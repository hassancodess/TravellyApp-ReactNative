import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Container from '../../components/shared/Container'
import Line from '../../components/onboarding/Line'
import Button from '../../components/shared/Button'
import Checkbox from 'expo-checkbox'
import { colors } from '../../../assets/Constants'

const Signup4 = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <Container styles='justify-between'>
      <View className='flex-col items-center w-full '>
        <View className='mb-8'>
          {/* Lines Container*/}
          <View className={`flex-row overflow-hidden justify-center`}>
            <Line variant={'primary4'} />
            <Line variant={'primary4withSpace'} />
            <Line variant={'primary4withSpace'} />
            <Line variant={'primary4withSpace'} />
          </View>
          {/* Back Button */}
          <View className='my-5'>
            <Entypo name='chevron-left' size={42} color='black' />
          </View>
        </View>
        {/* Text Container */}
        <View className='items-center gap-y-3 mb-10'>
          <Text className='text-2xl font-psemibold text-center'>
            Great to meeet You!
          </Text>
          <Text className='text-lg font-pmedium tracking-wide'>
            Sign up and let's get started
          </Text>
        </View>
        {/* Inputs */}
        <View className='bg-white w-full p-5 rounded-lg text-2xl  mb-3'>
          <TextInput placeholder='First Name' />
        </View>
        <View className='bg-white w-full p-5 rounded-lg text-2xl  mb-8'>
          <TextInput placeholder='Last Name' />
        </View>
        <View className='bg-white w-full p-5 rounded-lg text-2xl  mb-3'>
          <TextInput placeholder='Password' />
        </View>
        <View className='bg-white w-full p-5 rounded-lg text-2xl mb-8'>
          <TextInput placeholder='Confirm Password' />
        </View>
        {/* Button */}
        <Button title={'Sign Up'} bgColor={'bg-peach300'} />
        {/* I agree */}
        <View className='flex-row items-center  w-full gap-x-4'>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? colors.green700 : undefined}
          />
          <Text className='font-pmedium'>
            I accept{' '}
            <Text className='text-links font-pmedium'>Terms & Conditions</Text>{' '}
            and <Text className='text-links font-pmedium'>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </Container>
  )
}

export default Signup4
