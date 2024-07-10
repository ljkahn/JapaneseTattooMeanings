import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { getSuggestions } from '../utils/api';
import { globalStyles, colors } from '../styles/styles';

const SuggestionScreen = () => {
  const [theme, setTheme] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleGetSuggestions = async () => {
    try {
      const result = await getSuggestions(theme);
      setSuggestions(result);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter theme"
        value={theme}
        onChangeText={setTheme}
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleGetSuggestions}>
        <Text style={globalStyles.buttonText}>Get Suggestions</Text>
      </TouchableOpacity>
      <ScrollView style={styles.suggestionsContainer}>
        <Text style={globalStyles.text}>{suggestions}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.text,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  suggestionsContainer: {
    marginTop: 20,
    maxHeight: '70%',
  },
});

export default SuggestionScreen;
