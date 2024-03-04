import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

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
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Daiitoku Myo-Ō",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Standalone",
  },
    {
    id: 4,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Daikokuten",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Ebisu, Flowers, Seven Lucky Gods (Shichi Fuku Jin)",
  },
    {
    id: 5,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Dainichi Nyorai",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Lotus (Renge)",
  },
    {
    id: 6,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Dakiniten",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Fox (Kitsune)",
  },
    {
    id: 7,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Ebisu",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Flowers, Lucky Charms, Sea Bream (Taj), Seven Lucky Gods (Shichi Fuku Jin)",
  },
    {
    id: 8,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Enma",
    artist: "",
    tattooBackgrounds: "Clouds, Fire, Stone",
    pairings: "Apparition (Yokai), Demons (Oni)",
  },
    {
    id: 9,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Fudō Myo-Ō",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dragon (Ryū), Lotus (Renge), Kongara Dōji, Seitaka Dōji, Phoenix-Shaped Flame",
  },
    {
    id: 10,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Fūjin and Raijin",
    artist: "",
    tattooBackgrounds: "Clouds, Lightening, Water",
    pairings: "Dragon (Ryū)",
  },
    {
    id: 11,
    category: "Deities",
    // imageUri: require("./assets/category1/image1.jpg"),
    title: "Hotei",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Seven Lucky Gods (Schichi Fuku Jin)",
  },
  {
    id: 12,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Kannon",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Carp (Koi), Dragon (Ryū), Flowers, Lotus (Renge)",
  },
    {
    id: 13,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Ni-Ō",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Buddhist Deities and Figures, Demons (Oni), Flowers",
  },
    {
    id: 14,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Seven Lucky Gods",
    artist: "",
    tattooBackgrounds: "Clouds, Water, Stone",
    pairings: "Standalone",
  },
    {
    id: 15,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Susanō",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Inada Hime, Shintō Deities, Yamata no Orochi",
  },
    {
    id: 16,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Tennyo",
    artist: "",
    tattooBackgrounds: "Clouds, Water, Stone",
    pairings: "Buddhist Deities, Flowers",
  },
    {
    id: 17,
    category: "Deities",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Oanamuchi no Mikoto",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Wild Beasts",
  },

]
const Deities = () => {
  return (
    <ScrollView>
      {deitiesData.map((deity) => (
        <View key={deity.id} style={{ margin: 10, alignItems: 'center' }}>
          <Image source={deity.imageUri} style={{ width: 100, height: 100 }} />
          <Text style={{ fontWeight: 'bold' }}>{deity.title}</Text>
          <Text>Artist: {deity.artist}</Text>
          <Text>Tattoo Backgrounds: {deity.tattooBackgrounds}</Text>
          <Text>Pairings: {deity.pairings}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Deities;