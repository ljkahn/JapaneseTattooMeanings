import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

function CategoryScreen({ navigation }) {
  const categories = [
    { name: 'Deities', image: require("../assets/deities/sevenLuckyGods.jpeg"), screen: 'DeitiesScreen' },
    { name: 'Fauna', image: require("../assets/fauna/kitsune.jpeg"), screen: 'FaunaScreen' },
    { name: 'Flora', image: require("../assets/flora/peony.jpeg"), screen: 'FloraScreen' },
    { name: 'Folklore', image: require("../assets/folklore/onibaba.jpeg"), screen: 'FolkloreScreen' },
    { name: 'Suikoden', image: require("../assets/suikoden/senkaji.jpeg"), screen: 'SuikodenScreen' },
    { name: 'Supernatural', image: require("../assets/supernatural/baku.jpeg"), screen: 'SupernaturalScreen' },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity 
      key={item.name} 
      style={styles.category} 
      onPress={() => navigation.navigate(item.screen)}
    >
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={item => item.name}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10, // Adjust padding as needed for spacing
    paddingTop: 10, // Add padding at the top for better look
    backgroundColor: '#23231c',
  },
  category: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginBottom: 20, // Increase space between rows
  },
  image: {
    width: 150, // Adjust the width as necessary
    height: 150, // Adjust the height as necessary
  },
  text: {
    color: '#fff',
    marginTop: 10, // Add space between the image and the text
  },
});
