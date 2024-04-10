import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ImageDetailScreen = ({ route }) => {
  const { imageData } = route.params;
  const [showHistory, setShowHistory] = useState(false); // State to control the visibility of the history

  return (
    <View style={styles.container}>
      <Image source={imageData.imageUri} style={styles.image} />
      <Text style={[styles.text, { fontWeight: 'bold' }]}>Title: {imageData.title}</Text>
      <Text style={styles.text}>Category: {imageData.category}</Text>
      <Text style={styles.text}>Artist: {imageData.artist}</Text>
      <Text style={styles.text}>Tattoo Backgrounds: {imageData.tattooBackgrounds}</Text>
      <Text style={[styles.text, { textAlign: 'center' }]}>Pairings: {imageData.pairings}</Text>

      {/* Check if there is a history to show */}
      {imageData.history && (
        <View>
          <TouchableOpacity onPress={() => setShowHistory(!showHistory)} style={styles.button}>
            <Text style={styles.buttonText}>{showHistory ? "Hide History" : "Show History"}</Text>
          </TouchableOpacity>

          {/* Conditional Rendering of History Section */}
          {showHistory && (
            <Text style={styles.historyText}>
              {imageData.history}
            </Text>
          )}
        </View>
      )}
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
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#444', // Button background color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // Button text color
  },
  historyText: {
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    marginTop: 10,
  },
});
