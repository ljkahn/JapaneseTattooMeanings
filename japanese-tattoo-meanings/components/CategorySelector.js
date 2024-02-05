import { View, Text } from 'react-native'
import React from 'react'

const CategorySelector = (route) => {
  const {category} = route.params;
  return (
    <View>
      <Text>CategorySelector</Text>
    </View>
  )
}

export default CategorySelector