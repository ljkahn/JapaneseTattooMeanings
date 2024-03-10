import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imageData from '../utils/imageData'; // Import your image data here

const SearchScreen = ({ closeModal }) => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleResultPress = (item) => {
    // Navigate to the details screen with the selected image data
    navigation.navigate('ImageDetailScreen', { imageData: item });
  };

  const renderResultItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleResultPress(item)}>
      <Text style={styles.resultItem}>{item.title}</Text>
    </TouchableOpacity>
  );

  const filterResults = (text) => {
    // Filter image data based on search text
    return imageData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        autoFocus={true}
        onChangeText={(text) => setSearchText(text)}
        placeholderTextColor="#aaa"
      />
      <FlatList
        data={filterResults(searchText)}
        renderItem={renderResultItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.resultList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23231c',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#fff', // Set text color to white
  },
  resultItem: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SearchScreen;
