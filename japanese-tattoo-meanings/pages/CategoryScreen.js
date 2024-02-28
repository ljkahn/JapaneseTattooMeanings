// CategoryScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

function CategoryScreen({ navigation }) {
  console.log(navigation)
  const categories = [
    { name: 'Deities', image: require("../assets/deities/sevenLuckyGods.jpeg"), screen: 'DeitiesScreen' },
    { name: 'Fauna', image: require("../assets/fauna/kitsune.jpeg"), screen: 'FaunaScreen' },
    { name: 'Flora', image: require("../assets/flora/peony.jpeg"), screen: 'FloraScreen' },
    { name: 'Folklore', image: require("../assets/folklore/onibaba.jpeg"), screen: 'FolkloreScreen' },
    { name: 'Supernatural', image: require("../assets/supernatural/baku.jpeg"), screen: 'SupernaturalScreen' },
    { name: 'Suikoden', image: require("../assets/suikoden/senkaji.jpeg"), screen: 'SuikodenScreen' },
    // Add other categories similarly
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {categories.map((category, index) => (
<TouchableOpacity key={index} onPress={() => {
  console.log(`Navigating to ${category.screen}`);
  navigation.navigate(category.screen);
}}>
  <TouchableOpacity onPress={() => alert('Image Clicked!')}></TouchableOpacity>
            <View style={styles.category}>
              <Image source={category.image} style={styles.image} resizeMode="contain" />
              <Text style={styles.text}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default CategoryScreen;

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
