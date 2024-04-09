import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetailScreen = ({ route }) => {
  const { imageData } = route.params;

  return (
    <View style={styles.container}>
      <Image source={imageData.imageUri} style={styles.image} />
      <Text style={[styles.text, { fontWeight: 'bold' }]}>Title: {imageData.title}</Text>
      <Text style={styles.text}>Category: {imageData.category}</Text>
      <Text style={styles.text}>Artist: {imageData.artist}</Text>
      <Text style={styles.text}>Tattoo Backgrounds: {imageData.tattooBackgrounds}</Text>
      <Text style={[styles.text, { textAlign: 'center' }]}>Pairings: {imageData.pairings}</Text>
    </View>
  );
};

export default ImageDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23231c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300, // Adjusted for better visibility
    height: 300, // Adjusted for better visibility
    marginBottom: 20, // Added space between the image and text
  },
  text: {
    color: '#fff',
    marginBottom: 5, // Added for better text separation
  },
});
