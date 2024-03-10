import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
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
    <ScrollView style={styles.container}>
      {deitiesData.map((deity) => (
        <View key={deity.id} style={{ margin: 10, alignItems: 'center' }}>
          <Image source={deity.imageUri} style={{ width: 100, height: 100 }} />
          <Text style={[styles.text, { fontWeight: 'bold' }]}>{deity.title}</Text>
          <Text style= {styles.text}>Artist: {deity.artist}</Text>
          <Text style= {styles.text}>Tattoo Backgrounds: {deity.tattooBackgrounds}</Text>
          <Text style= {styles.text}>Pairings: {deity.pairings}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Deities;

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
