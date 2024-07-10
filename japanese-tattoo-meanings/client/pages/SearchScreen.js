import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { globalStyles, colors } from '../styles/styles';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    try {
      const response = await axios.post('http://localhost:3001/chat', { message: searchText });
      if (response.data && response.data.reply) {
        const replyText = response.data.reply;
        setResults(replyText.split('\n'));
      } else {
        setResults(['No suggestions found.']);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setResults(['Error fetching suggestions. Please try again later.']);
    }
  };

  const renderResultItem = ({ item }) => (
    <TouchableOpacity>
      <Text style={globalStyles.detailText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={colors.text}
        style={globalStyles.text}
        autoFocus={true}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity onPress={fetchResults} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={results}
        renderItem={renderResultItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.resultList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultList: {
    marginTop: 20,
  },
});

export default SearchScreen;
