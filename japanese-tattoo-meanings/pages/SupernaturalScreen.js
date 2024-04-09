import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook




const supernaturalData = [
 {
    id: 87,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/baku1.jpeg"),
    title: "Baku",
    artist: "Unknown",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Demon (Oni), Flowers, Lucky Charms",
  },
    {
    id: 88,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/dragon.png"),
    title: "Dragon",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Buddhist Deities, Carp (Koi), Dragon (Ryū), Four Symbols (Shi Shō), Phoenix (Hō-Ō), Tiger (Tora)",
    note: "Dragons can be paired with many elements beyond the brief listing above."
  },
    {
    id: 89,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/dragonTiger.jpeg"),
    title: "Dragon and Tiger",
    artist: "Yoshitsuya",
    tattooBackgrounds: "Clouds, Lightening, Stone, Water",
    pairings: "Flowers, Standalone",
  },
    {
    id: 90,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/hakutaku.jpeg"),
    title: "Hakutaku",
    artist: "Miyagi Gengyos",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Kirin",
  },
    {
    id: 91,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/kappa.jpeg"),
    title: "Kappa",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Flowers, Heroes",
  },
    {
    id: 92,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/karajishi.jpeg"),
    title: "Karajishi",
    artist: "Kitagawa Tsukimaro",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Buddhist Deities and Elements, Koma Inu, Peony (Botan)",
  },
    {
    id: 93,
    category: "Supernatural",
    imageUri: require("../assets/supernatural/kirin.jpeg"),
    title: "Kirin",
    artist: "19th Century Unknown",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Phoenix (Hō-Ō)",
  },
  {
    id: 94,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/namakubi.jpeg"),
    title: "Namakubi",
    artist: "Horiyoshi III",
    tattooBackgrounds: "Clouds, Stonem, Water",
    pairings: "Apparition (Yōkai), Demon (Oni), Flowers, Saginoike Heikurō, Warriors",
  },
    {
    id: 95,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/nekomata.png"),
    title: "Nekomata",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Maple Leaves (Momiji), Severed Heads (Namakubi)",
  },
    {
    id: 96,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/omukade.webp"),
    title: "Ōmukade",
    artist: "Sekiro",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dragon (Ryū), Fujiwara no Hidesato",
  },
    {
    id: 97,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/phoenix.jpeg"),
    title: "Phoenix",
    artist: "Katsushika Hokusai",
    tattooBackgrounds: "Clouds",
    pairings: "Buddhist Deities, Dragon (Ryū), Flowers, Kirin",
  },
    {
    id: 98,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/rokuro.jpeg"),
    title: "Rokuro Kubi",
    artist: "Utagawa Toyokuni",
    tattooBackgrounds: "Clouds",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Severed Heads (Namakubi)",
  },
    {
    id: 99,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/sojobo.jpg"),
    title: "Sōjōbō",
    artist: "Katsukawa Shuntei",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Tengu, Ushiwakamaru",
  },
    {
    id: 100,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/sumizome.jpeg"),
    title: "Sumizome",
    artist: "Kunichika",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Cherry Blossoms (Sakura)",
  },
      {
    id: 101,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/tengu.jpeg"),
    title: "Tengu",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Flowers, Kintarō, Minamoto no Yoshitsune, Sōjōbō, Scattered Faces (Men Chirashi)",
  },
      {
    id: 102,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/tsuchigumo.jpeg"),
    title: "Tsuchigumo",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Minamoto no Yorimitsu, Spiders (Kumo), Watanabe no Tsuna",
  },
      {
    id: 103,
    category: "Supernatural",
    imageUri:require("../assets/deities/luckyGods.jpeg"),
    title: "Yatagarasu",
    artist: "",
    tattooBackgrounds: "Clouds",
    pairings: "Amaterasu, Jimmu (Jinmu Ten-Ō), Warriors",
  },
]

const Supernatural = () => {
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
      data={supernaturalData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // Set the number of columns you want here
      contentContainerStyle={styles.container}
    />
  );
};

export default Supernatural;

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