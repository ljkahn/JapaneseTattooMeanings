import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getSuggestions } from '../utils/openAi'; // Ensure this path is correct

const SuggestionScreen = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleGetSuggestions = async () => {
    if (!prompt) {
      Alert.alert('Please enter a prompt');
      return;
    }
    try {
      const suggestionText = await getSuggestions(prompt);
      setSuggestion(suggestionText);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      Alert.alert('Error fetching suggestions', 'Please try again later');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tattoo Idea Generator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter prompt for tattoo ideas"
        value={prompt}
        onChangeText={setPrompt}
      />
      <Button title="Get Suggestions" onPress={handleGetSuggestions} />
      {suggestion ? (
        <Text style={styles.suggestion}>Suggestion: {suggestion}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Adjust based on your app's theme
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
  },
  suggestion: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default SuggestionScreen;
