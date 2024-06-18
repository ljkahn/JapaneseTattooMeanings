import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { globalStyles } from '../styles/styles';

const ImageDetailScreen = ({ route }) => {
  const { imageData } = route.params;

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Image source={imageData.imageUri} style={globalStyles.image} />
      <Text style={[globalStyles.text, globalStyles.detailText]}>Title: {imageData.title}</Text>
      <Text style={[globalStyles.text, globalStyles.detailText]}>Category: {imageData.category}</Text>
      <Text style={[globalStyles.text, globalStyles.detailText]}>Artist: {imageData.artist}</Text>
      <Text style={[globalStyles.text, globalStyles.detailText]}>Tattoo Backgrounds: {imageData.tattooBackgrounds}</Text>
      <Text style={[globalStyles.text, globalStyles.detailText]}>Pairings: {imageData.pairings}</Text>
    </ScrollView>
  );
};

export default ImageDetailScreen;
