// ImageDetailScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetailScreen = ({ route }) => {
  // Extract the imageData from the route params
  const { imageData } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
      <Image source={imageData.imageUri} style={{ width: 200, height: 200 }} />
      <Text style={{ fontWeight: 'bold'}}>Title: {imageData.title} </Text>
      <Text>Category: {imageData.category}</Text>
      <Text>Artist: {imageData.artist}</Text>
      <Text>Tattoo Backgrounds: {imageData.tattooBackgrounds}</Text>
      <Text style={{ textAlign: 'center'}}>Pairings: {imageData.pairings}</Text>
      
    </View>
  );
}

export default ImageDetailScreen;
