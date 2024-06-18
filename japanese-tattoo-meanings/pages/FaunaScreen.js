import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { globalStyles, colors } from '../styles/styles';



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
function FaunaScreen() {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('ImageDetailScreen', { imageData: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.item}>
      <Image source={item.imageUri} style={styles.image} />
      <Text style={[globalStyles.text, styles.title]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={faunaData
      }
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

export default FaunaScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  item: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    color: colors.text,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
});