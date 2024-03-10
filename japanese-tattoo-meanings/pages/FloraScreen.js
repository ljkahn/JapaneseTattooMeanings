import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'



const floraData = [
  {
    id: 26,
    category: "Flora",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Tiger",
    artist: "",
    tattooBackgrounds: "Clouds, Lightening, Stone, Water",
    pairings: "Bamboo (Take), Demons (Oni), Dragon (Ryū), Flowers, Gyōja Bushō, Shoki",
  },
    {
    id: 27,
    category: "Flora",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Bamboo",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Birds, Chinese Elements, Shōchikubai, Tiger (Tora), Warriors",
  },
    {
    id: 28,
    category: "Flora",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Cherry Blossoms",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Spring Elements, Elements associated with mortality",
    note: "Cherry Blossoms can be paired with many elements beyond the brief listing above."
  },
    {
    id: 29,
    category: "Flora",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Chrysanthemum",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Dragon (Ryū), Kirin, Phoenix (Hō-Ō)",
    note: "Chrysanthemum can be paired with many elements beyond the brief listing above."
  },
    {
    id: 30,
    category: "Flora",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Lotus",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Buddhist Deities and Elements",
  },
    {
    id: 31,
    category: "Flora",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Maple Leaves",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Autumn Elements",
    note: "Maple Leaves can be paired with many elements beyond the brief listing above."
  },
    {
    id: 32,
    category: "Flora",
    // imageUri: require("./assets/category1/image1.jpg"),
    title: "Peach",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Momotarō, Spring and Summer Elements",
  },
]
const Flora = () => {
  return (
    <ScrollView style= {styles.container}>
      {floraData.map((fauna) => (
        <View key={Flora.id} style={{ margin: 10, alignItems: 'center' }}>
          <Image source={Flora.imageUri} style={{ width: 100, height: 100 }} />
          <Text style={[styles.text, { fontWeight: 'bold' }]}>{Flora.title}</Text>
          <Text style={styles.text}>Artist: {Flora.artist}</Text>
          <Text style={styles.text}>Tattoo Backgrounds: {Flora.tattooBackgrounds}</Text>
          <Text style={styles.text}>Pairings: {Flora.pairings}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Flora

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
