import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'



const supernaturalData = [
    {
    id: 87,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Baku",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Demon (Oni), Flowers, Lucky Charms",
  },
    {
    id: 88,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Dragon",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Buddhist Deities, Carp (Koi), Dragon (Ryū), Four Symbols (Shi Shō), Phoenix (Hō-Ō), Tiger (Tora)",
    note: "Dragons can be paired with many elements beyond the brief listing above."
  },
    {
    id: 89,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Dragon and Tiger",
    artist: "",
    tattooBackgrounds: "Clouds, Lightening, Stone, Water",
    pairings: "Flowers, Standalone",
  },
    {
    id: 90,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Hakutaku",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Kirin",
  },
    {
    id: 91,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Kappa",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Flowers, Heroes",
  },
    {
    id: 92,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Karajishi",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Buddhist Deities and Elements, Koma Inu, Peony (Botan)",
  },
    {
    id: 93,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image1.jpg"),
    title: "Kirin",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Phoenix (Hō-Ō)",
  },
  {
    id: 94,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Namakubi",
    artist: "",
    tattooBackgrounds: "Clouds, Stonem, Water",
    pairings: "Apparition (Yōkai), Demon (Oni), Flowers, Saginoike Heikurō, Warriors",
  },
    {
    id: 95,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Nekomata",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Maple Leaves (Momiji), Severed Heads (Namakubi)",
  },
    {
    id: 96,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Ōmukade",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dragon (Ryū), Fujiwara no Hidesato",
  },
    {
    id: 97,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Phoenix",
    artist: "",
    tattooBackgrounds: "Clouds",
    pairings: "Buddhist Deities, Dragon (Ryū), Flowers, Kirin",
  },
    {
    id: 98,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Rokuro Kubi",
    artist: "",
    tattooBackgrounds: "Clouds",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Severed Heads (Namakubi)",
  },
    {
    id: 99,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Sōjōbō",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Tengu, Ushiwakamaru",
  },
    {
    id: 100,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Sumizome",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Cherry Blossoms (Sakura)",
  },
      {
    id: 101,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Tengu",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Flowers, Kintarō, Minamoto no Yoshitsune, Sōjōbō, Scattered Faces (Men Chirashi)",
  },
      {
    id: 102,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Tsuchigumo",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Minamoto no Yorimitsu, Spiders (Kumo), Watanabe no Tsuna",
  },
      {
    id: 103,
    category: "Supernatural",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Yatagarasu",
    artist: "",
    tattooBackgrounds: "Clouds",
    pairings: "Amaterasu, Jimmu (Jinmu Ten-Ō), Warriors",
  },
]
const Supernatural = () => {
  return (
    <ScrollView>
      {supernaturalData.map((Supernatural) => (
        <View key={Supernatural.id} style={{ margin: 10, alignItems: 'center' }}>
          <Image source={Supernatural.imageUri} style={{ width: 100, height: 100 }} />
          <Text style={{ fontWeight: 'bold' }}>{Supernatural.title}</Text>
         
          <Text>Artist: {Supernatural.artist}</Text>
          <Text>Tattoo Backgrounds: {Supernatural.tattooBackgrounds}</Text>
          <Text>Pairings: {Supernatural.pairings}</Text>
        </View>
      ))}
    </ScrollView>
  );
};


export default Supernatural