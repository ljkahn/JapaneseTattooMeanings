import { View, Text, Image } from 'react-native'
import React from 'react'

const CategorySelector = (route) => {
  const category = route.params;
  return (
    <View>
      <Text>CategorySelector</Text>
      <Image 
  source={require ("../assets/deities/Benzaiten.jpeg")} 
  style={{ width: 200, height: 200 }}
  resizeMode="contain"
/>

<Image 
  source={require ("../assets/deities/Benzaiten.jpeg")} 
  style={{ width: 200, height: 200 }}
  resizeMode="contain"
/>
    </View>
  )
}

export default CategorySelector