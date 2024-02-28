import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'



const faunaData = [
   {
    id: 18,
    category: "Fauna",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Carp",
    artist: "",
    tattooBackgrounds: "Water",
    pairings: "Dragon (Ryū), Flowers, Goldfish (Kingyo)",
  },
    {
    id: 19,
    category: "Fauna",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "",
    artist: "",
    tattooBackgrounds: "",
    pairings: "",
  },
    {
    id: 20,
    category: "Fauna",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Crane",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Lucky Charms",
  },
    {
    id: 21,
    category: "Fauna",
    // imageUri: require("./assets/category1/image1.jpg"),
    title: "Fox",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dakiniten, Deities, Flowers, Inari (Inari Ōkami), Lucky Charms",
  },
  {
    id: 23,
    category: "Fauna",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Goldfish",
    artist: "",
    tattooBackgrounds: "Water",
    pairings: "Carp (Koi), Flowers, Freshwater Elements, Lucky Charms",
  },
    {
    id: 24,
    category: "Fauna",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Hawk",
    artist: "",
    tattooBackgrounds: "Clouds",
    pairings: "Camellias (Tsubaki), Flowers, Pine Trees (Matsu), Snake (Hebi), Warriors",
  },
    {
    id: 25,
    category: "Fauna",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Snake",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: " Flowers, Hakamadare, Hannya, Kintarō, Orochimaru, Saginoike Heikurō",
    note: "Snakes can be paired with many elements beyond the brief listing above."
  },
]
const Fauna = () => {
  return (
    <ScrollView>
      {faunaData.map((fauna) => (
        <View key={fauna.id} style={{ margin: 10, alignItems: 'center' }}>
          <Image source={fauna.imageUri} style={{ width: 100, height: 100 }} />
          <Text style={{ fontWeight: 'bold' }}>{fauna.title}</Text>
          <Text>Artist: {fauna.artist}</Text>
          <Text>Tattoo Backgrounds: {fauna.tattooBackgrounds}</Text>
          <Text>Pairings: {fauna.pairings}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Fauna