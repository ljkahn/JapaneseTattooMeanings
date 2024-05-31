import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';


const suikodenData = [
 {
    id: 76,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/gyoja.jpeg"),
    title: "Gyōja Bushō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Tiger (Tora)",
  },
    {
    id: 77,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/kanchi.jpeg"),
    title: "Kanchi Kotsuritsu Shuki",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 78,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/kaosho.jpeg"),
    title: "Kaoshō Rochisin",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Nine-Deragons-Crested Shishin (Kumonryū Shishin/ Panther Head Rinchu/ Hyoshito Rinchu), Tiger-Slaying General Richū (Dakoshō Richū)",
  },
    {
    id: 79,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/konkoryu.png"),
    title: "Konkoryū Rishun",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 80,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/ko.jpg"),
    title: "Ko Sanjō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 81,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/kumonryu.jpeg"),
    title: "Kumonryū Shishin",
    artist: "Kinuyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Enemy Soldiers",
  },
    {
    id: 82,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/rori.jpeg"),
    title: "Rori Hakuchō Chōjun",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 83,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/roshi.jpeg"),
    title: "Rōshi Ensei",
    artist: "Utagawa Yoshiharu",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers",
  },
  {
    id: 84,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/saienshi.jpg"),
    title: "Saienshi Chōsei",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, stone, Water",
    pairings: "Cherry Blossoms (Sakura), Maple Leaves (Momiji)",
  },
    {
    id: 85,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/senkaji1.jpeg"),
    title: "Senkaji Chō-Ō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 86,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/tanmei.webp"),
    title: "Tanmei Jirō Gen Shōgo",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Water",
    pairings: "Carp (Koi), Enemy Soldoiers",
  },
]
const Suikoden = () => {
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
      data={suikodenData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // Set the number of columns you want here
      contentContainerStyle={styles.container}
    />
  );
};

export default Suikoden;

const styles = StyleSheet.create({
  container: {
    // Add or adjust styles for the container if needed
    paddingHorizontal: 10, // Adjust padding as needed
    backgroundColor:'#cfc0a7'
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