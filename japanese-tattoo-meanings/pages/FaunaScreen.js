import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';



const faunaData = [
      {
    id: 18,
    category: "Fauna",
    imageUri:require("../assets/fauna/carp.webp"),
    title: "Carp",
    artist: "Utagawa Toyokuni",
    tattooBackgrounds: "Water",
    pairings: "Dragon (Ryū), Flowers, Goldfish (Kingyo)",
    history:"jafdafndjskanfdksj",
  },
  //   {
  //   id: 19,
  //   category: "Fauna",
    // imageUri:require("../assets/deities/luckyGods.jpeg"),
  //   title: "",
  //   artist: "",
  //   tattooBackgrounds: "",
  //   pairings: "",
  // },
    {
    id: 20,
    category: "Fauna",
    imageUri:require("../assets/fauna/crane.jpeg"),
    title: "Crane",
    artist: "Utagawa Hiroshige ",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Lucky Charms",
  },
    {
    id: 21,
    category: "Fauna",
    imageUri: require("../assets/fauna/fox.webp"),
    title: "Fox",
    artist: "Utagawa Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dakiniten, Deities, Flowers, Inari (Inari Ōkami), Lucky Charms",
  },
  {
    id: 23,
    category: "Fauna",
    imageUri:require("../assets/fauna/goldfish.jpeg"),
    title: "Goldfish",
    artist: "Ohara Koson",
    tattooBackgrounds: "Water",
    pairings: "Carp (Koi), Flowers, Freshwater Elements, Lucky Charms",
  },
    {
    id: 24,
    category: "Fauna",
    imageUri:require("../assets/fauna/hawk.jpg"),
    title: "Hawk",
    artist: "Eisen Keisai",
    tattooBackgrounds: "Clouds",
    pairings: "Camellias (Tsubaki), Flowers, Pine Trees (Matsu), Snake (Hebi), Warriors",
  },
    {
    id: 25,
    category: "Fauna",
    imageUri:require("../assets/fauna/snake.jpeg"),
    title: "Snake",
    artist: "Utagawa Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: " Flowers, Hakamadare, Hannya, Kintarō, Orochimaru, Saginoike Heikurō",
    note: "Snakes can be paired with many elements beyond the brief listing above."
  },
    {
    id: 26,
    category: "Fauna",
    imageUri:require("../assets/fauna/tiger.jpeg"),
    title: "Tiger",
    artist: "Ohara Koson",
    tattooBackgrounds: "Clouds, Lightening, Stone, Water",
    pairings: "Bamboo (Take), Demons (Oni), Dragon (Ryū), Flowers, Gyōja Bushō, Shoki",
  },
]
const Fauna = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('ImageDetailScreen', { imageData: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.item}>
      <Image source={item.imageUri} style={styles.image} />
      <Text style={[styles.text, { fontWeight: 'bold' }]}>{item.title}</Text>
      {/* Uncomment below if you want to show more details in the grid view
      <Text style={styles.text}>Artist: {item.artist}</Text>
      <Text style={styles.text}>Tattoo Backgrounds: {item.tattooBackgrounds}</Text>
      <Text style={styles.text}>Pairings: {item.pairings}</Text>
      */}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={faunaData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // Set the number of columns you want here
      contentContainerStyle={styles.container}
    />
  );
};

export default Fauna;

const styles = StyleSheet.create({
  container: {
    // Add or adjust styles for the container if needed
    paddingHorizontal: 10, // Adjust padding as needed
    backgroundColor:'#23231c'
  },
  item: {
    flex: 1,
    margin: 5, // Adjust spacing between items
    alignItems: 'center', // Center items horizontally in their flex container
  },
  image: {
    width: 150, // Adjust size based on your layout preference and screen size
    height: 150, // Adjust size based on your layout preference and screen size
    marginBottom: 5, // Space between the image and the text below it
  },
  text: {
    color: '#fff',
    textAlign: 'center', // Ensure text is centered under the image
  },
});