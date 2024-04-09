import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const deitiesData = [    

{
    id: 1,
    category: "Deities",
    imageUri: require("../assets/deities/Benzaiten.jpeg"),
    title: "Benzaiten",
    artist: "Aoigaoka Keisei",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Dragon (Ryū), Lucky Charms, Seven Lucky Gods (Shichi Fuku Jin)", 
  },
  {
    id: 2,
    category: "Deities",
    imageUri: require("../assets/deities/Bishamonten.jpeg"),
    title: "Bishamonten",
    artist: "Unknown",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dragon (Ryū), Oni, Seven Lucky Gods (Shichi Fuku Jin)",

  },
    {
    id: 3,
    category: "Deities",
    imageUri: require("../assets/deities/daiikotu.jpg"),
    title: "Daiitoku Myo-Ō",
    artist: "Unknown",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Standalone",
  },
    {
    id: 4,
    category: "Deities",
    imageUri: require("../assets/deities/daiikokuten.png"),
    title: "Daikokuten",
    artist: "Kitagawa Utamaro II, Ni Dai Me Kitagawa Utamaro",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Ebisu, Flowers, Seven Lucky Gods (Shichi Fuku Jin)",
  },
    {
    id: 5,
    category: "Deities",
    imageUri: require("../assets/deities/dainichi.jpeg"),
    title: "Dainichi Nyorai",
    artist: "13th Century Unknown",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Lotus (Renge)",
  },
    {
    id: 6,
    category: "Deities",
    imageUri: require("../assets/deities/dakiniten.jpeg"),
    title: "Dakiniten",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Fox (Kitsune)",
  },
    {
    id: 7,
    category: "Deities",
    imageUri: require("../assets/deities/ebisu.jpeg"),
    title: "Ebisu",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Flowers, Lucky Charms, Sea Bream (Taj), Seven Lucky Gods (Shichi Fuku Jin)",
  },
    {
    id: 8,
    category: "Deities",
    imageUri: require("../assets/deities/enma.jpg"),
    title: "Enma",
    artist: "",
    tattooBackgrounds: "Clouds, Fire, Stone",
    pairings: "Apparition (Yokai), Demons (Oni)",
  },
    {
    id: 9,
    category: "Deities",
    imageUri: require("../assets/deities/fudomyoo.jpeg"),
    title: "Fudō Myo-Ō",
    artist: "Ogata Gekko",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dragon (Ryū), Lotus (Renge), Kongara Dōji, Seitaka Dōji, Phoenix-Shaped Flame",
  },
    {
    id: 10,
    category: "Deities",
    imageUri: require("../assets/deities/fuijinRijin.jpeg"),
    title: "Fūjin and Raijin",
    artist: "",
    tattooBackgrounds: "Clouds, Lightening, Water",
    pairings: "Dragon (Ryū)",
  },
    {
    id: 11,
    category: "Deities",
    imageUri: require("../assets/deities/hotei.webp"),
    title: "Hotei",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Seven Lucky Gods (Schichi Fuku Jin)",
  },
  {
    id: 12,
    category: "Deities",
    imageUri: require("../assets/deities/kannon.png"),
    title: "Kannon",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Carp (Koi), Dragon (Ryū), Flowers, Lotus (Renge)",
  },
    {
    id: 13,
    category: "Deities",
    imageUri: require("../assets/deities/niO.jpg"),
    title: "Ni-Ō",
    artist: "Katsushika Hokusai  (1760–1849)",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Buddhist Deities and Figures, Demons (Oni), Flowers",
  },
    {
    id: 14,
    category: "Deities",
    imageUri:require("../assets/deities/luckyGods.jpeg"),
    title: "Seven Lucky Gods",
    artist: "Katsushika Hokusai",
    tattooBackgrounds: "Clouds, Water, Stone",
    pairings: "Standalone",
  },
    {
    id: 15,
    category: "Deities",
    imageUri:require("../assets/deities/susano.jpg"),
    title: "Susanō",
    artist: "Utagawa Kuniteru)",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Inada Hime, Shintō Deities, Yamata no Orochi",
  },
    {
    id: 16,
    category: "Deities",
    imageUri:require("../assets/deities/tennyo.jpeg"),
    title: "Tennyo",
    artist: "Katsukawa Shunsho",
    tattooBackgrounds: "Clouds, Water, Stone",
    pairings: "Buddhist Deities, Flowers",
  },
    {
    id: 17,
    category: "Deities",
    imageUri:require("../assets/deities/oanamuchi.jpeg"),
    title: "Oanamuchi no Mikoto",
    artist: "Utagawa Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Wild Beasts",
  },

]
const Deities = () => {
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
      data={deitiesData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // Set the number of columns you want here
      contentContainerStyle={styles.container}
    />
  );
};

export default Deities;

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