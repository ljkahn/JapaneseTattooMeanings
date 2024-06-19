import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imageData from '../utils/imageData';
import { globalStyles, colors } from '../styles/styles';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleResultPress = (item) => {
    navigation.navigate('ImageDetailScreen', { imageData: item });
  };

  const renderResultItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleResultPress(item)}>
      <Text style={globalStyles.resultItem}>{item.title}</Text>
    </TouchableOpacity>
  );

  const filterResults = (text) => {
    if (text === '') return [];
    return imageData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase()) ||
      item.artist.toLowerCase().includes(text.toLowerCase()) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(text.toLowerCase()))
    );
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={colors.text}
        style={globalStyles.input}
        autoFocus={true}
        onChangeText={(text) => setSearchText(text)}
        value={searchText} // Ensure TextInput is controlled
      />
      <FlatList
        data={filterResults(searchText)}
        renderItem={renderResultItem}
        keyExtractor={(item) => item.id.toString()}
        style={globalStyles.resultList}
      />
    </View>
  );
};

export default SearchScreen;
