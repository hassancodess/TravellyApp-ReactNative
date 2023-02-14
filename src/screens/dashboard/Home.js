import React from 'react'
import { Text, View, TextInput } from 'react-native'
import Container from '../../components/dashboard/Container'
import IconButton from '../../components/shared/IconButton'
import { colors } from '../../../assets/Constants'
const Home = () => {
  return (
    <Container>
      {/* Heading */}
      <Text>Explore the beautiful world!</Text>
      {/* Search */}
      <View className='bg-white flex-row rounded-3xl pl-5 pr-1 py-1'>
        {/* Input */}
        <TextInput placeholder='Search' className='flex-1 text-lg' />
        {/* Icon */}
        <IconButton
          icon='search-web'
          size={35}
          iconColor={colors.white}
          styles={'py-3 px-3 bg-peach300'}
        />
      </View>
      {/* Booking */}

      <Text>Booking</Text>
      {/* Recommended */}
      <Text>Recommended</Text>
      {/* Hot offers */}
      <Text>Hot offers</Text>
    </Container>
  )
}

export default Home
