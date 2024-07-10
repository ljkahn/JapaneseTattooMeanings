import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles, colors } from '../styles/styles';

// list of suikoden data
const suikodenData = [
  {
    id: 76,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/gyoja.jpeg"),
    title: "Gyōja Bushō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Tiger (Tora)",
  },
  {
    id: 77,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/kanchi.jpeg"),
    title: "Kanchi Kotsuritsu Shuki",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
  {
    id: 78,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/kaosho.jpeg"),
    title: "Kaoshō Rochisin",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Nine-Deragons-Crested Shishin (Kumonryū Shishin/ Panther Head Rinchu/ Hyoshito Rinchu), Tiger-Slaying General Richū (Dakoshō Richū)",
  },
  {
    id: 79,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/konkoryu.png"),
    title: "Konkoryū Rishun",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
  {
    id: 80,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/ko.jpg"),
    title: "Ko Sanjō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers",
  },
  {
    id: 81,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/kumonryu.jpeg"),
    title: "Kumonryū Shishin",
    artist: "Kinuyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Enemy Soldiers",
  },
  {
    id: 82,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/rori.jpeg"),
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
    imageUri: require("../assets/suikoden/saienshi.jpg"),
    title: "Saienshi Chōsei",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, stone, Water",
    pairings: "Cherry Blossoms (Sakura), Maple Leaves (Momiji)",
  },
  {
    id: 85,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/senkaji1.jpeg"),
    title: "Senkaji Chō-Ō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
  {
    id: 86,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/tanmei.webp"),
    title: "Tanmei Jirō Gen Shōgo",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Water",
    pairings: "Carp (Koi), Enemy Soldoiers",
  },
];

function SuikodenScreen() {
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
      data={suikodenData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

export default SuikodenScreen;

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
