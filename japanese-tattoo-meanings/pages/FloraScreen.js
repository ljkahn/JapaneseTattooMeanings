import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'



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
  return (
    <ScrollView style= {styles.container}>
      {floraData.map((Flora) => (
        <View key={Flora.id} style={{ margin: 10, alignItems: 'center' }}>
          <Image source={Flora.imageUri} style={{ width: 100, height: 100 }} />
          <Text style={[styles.text, { fontWeight: 'bold' }]}>{Flora.title}</Text>
          <Text style={styles.text}>Artist: {Flora.artist}</Text>
          <Text style={styles.text}>Tattoo Backgrounds: {Flora.tattooBackgrounds}</Text>
          <Text style={styles.text}>Pairings: {Flora.pairings}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Flora

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
