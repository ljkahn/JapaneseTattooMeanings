import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'



const suikodenData = [
   {
    id: 76,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Gyōja Bushō",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Tiger (Tora)",
  },
    {
    id: 77,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Kanchi Kotsuritsu Shuki",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 78,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Kaoshō Rochisin",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Nine-Deragons-Crested Shishin (Kumonryū Shishin/ Panther Head Rinchu/ Hyoshito Rinchu), Tiger-Slaying General Richū (Dakoshō Richū)",
  },
    {
    id: 79,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Konkoryū Rishun",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 80,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Ko Sanjō",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 81,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Kumonryū Shishin",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Enemy Soldiers",
  },
    {
    id: 82,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Rori Hakuchō Chōjun",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 83,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image1.jpg"),
    title: "Rōshi Ensei",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers",
  },
  {
    id: 84,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Saienshi Chōsei",
    artist: "",
    tattooBackgrounds: "Clouds, stone, Water",
    pairings: "Cherry Blossoms (Sakura), Maple Leaves (Momiji)",
  },
    {
    id: 85,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Senkaji Chō-Ō",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 86,
    category: "Suikoden",
    // imageUri: require("./assets/category1/image2.jpg"),
    title: "Tanmei Jirō Gen Shōgo",
    artist: "",
    tattooBackgrounds: "Water",
    pairings: "Carp (Koi), Enemy Soldoiers",
  },
]
const Suikoden = () => {
  return (
    <ScrollView>
      {suikodenData.map((fauna) => (
        <View key={Suikoden.id} style={{ margin: 10, alignItems: 'center' }}>
          <Image source={Suikoden.imageUri} style={{ width: 100, height: 100 }} />
          <Text style={{ fontWeight: 'bold' }}>{Suikoden.title}</Text>
          <Text>Artist: {Suikoden.artist}</Text>
          <Text>Tattoo Backgrounds: {Suikoden.tattooBackgrounds}</Text>
          <Text>Pairings: {Suikoden.pairings}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Suikoden