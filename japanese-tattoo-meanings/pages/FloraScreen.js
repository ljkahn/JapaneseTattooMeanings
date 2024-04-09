import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const floraData = [
    {
    id: 27,
    category: "Flora",
    imageUri:require("../assets/flora/bamboo.webp"),
    title: "Bamboo",
    artist: "Hiroshi Yoshida",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Birds, Chinese Elements, Shōchikubai, Tiger (Tora), Warriors",
  },
    {
    id: 28,
    category: "Flora",
    imageUri:require("../assets/flora/cherryBlossoms.jpeg"),
    title: "Cherry Blossoms",
    artist: "Yoshimoto Gesso",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Spring Elements, Elements associated with mortality",
    note: "Cherry Blossoms can be paired with many elements beyond the brief listing above."
  },
    {
    id: 29,
    category: "Flora",
    imageUri:require("../assets/flora/mum.jpeg"),
    title: "Chrysanthemum",
    artist: "Shodo Kawarazaki",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Dragon (Ryū), Kirin, Phoenix (Hō-Ō)",
    note: "Chrysanthemum can be paired with many elements beyond the brief listing above."
  },
    {
    id: 30,
    category: "Flora",
    imageUri:require("../assets/flora/lotus.jpeg"),
    title: "Lotus",
    artist: "Ohara Koson",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Buddhist Deities and Elements",
  },
    {
    id: 31,
    category: "Flora",
    imageUri:require("../assets/flora/maple.jpeg"),
    title: "Maple Leaves",
    artist: " Kawarazaki Shodo",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Autumn Elements",
    note: "Maple Leaves can be paired with many elements beyond the brief listing above."
  },
    {
    id: 32,
    category: "Flora",
    imageUri:require("../assets/flora/peach.webp"),
    title: "Peach",
    artist: "Morimoto Toko",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Momotarō, Spring and Summer Elements",
  },
  {
      id: 33,
    category: "Flora",
    imageUri:require("../assets/flora/peony1.jpeg"),
    title: "Peony",
    artist: "Tanigami Konan",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Animals, Deities, Heroes, Mythological Creatures, Spring and Summer Elements",
  },
]
const Flora = () => {
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
      data={floraData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // Set the number of columns you want here
      contentContainerStyle={styles.container}
    />
  );
};

export default Flora;

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