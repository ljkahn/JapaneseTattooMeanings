// ImageDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetailScreen = ({ route }) => {
  // Extract the imageData from the route params
  const { imageData } = route.params;

  return (
    <View style={[styles.container,{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
      <Image source={imageData.imageUri} style={{ width: 100, height: 100 }} />
      <Text style={[styles.text, { fontWeight: 'bold' }]}>Title: {imageData.title} </Text>
      <Text style={styles.text}>Category: {imageData.category}</Text>
      <Text style={styles.text}>Artist: {imageData.artist}</Text>
      <Text style={styles.text}>Tattoo Backgrounds: {imageData.tattooBackgrounds}</Text>
      <Text style={[styles.text,{ textAlign: 'center'}]}>Pairings: {imageData.pairings}</Text>
      
    </View>
  );
}

export default ImageDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23231c',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#fff',
  },
});