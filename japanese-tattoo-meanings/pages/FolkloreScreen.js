import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const folkloreData = [
  {
    id: 34,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/banzuiin.jpeg"),
    title: "Banzuiin Chōbei",
    artist: "Utagawa Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Cherry Blossoms (Sakura), Human Enemies",
  },
    {
    id: 35,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/benkei.jpeg"),
    title: "Benkei",
    artist: "Utagawa Kunisada",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Maple Leaves (Momiji), Cherry Blossoms (Sakura), Human Enemies, Minamoto no Yoshitsune",
  },
    {
    id: 36,
    category: "Folklore/History",
    imageUri:require("../assets/deities/luckyGods.jpeg"),
    title: "Dakki no Ohyaku",
    artist: "",
    tattooBackgrounds: "Clouds",
    pairings: "Apparition (Yōkai), Demon (Oni), Severed Heads (Namakubi)",
  },
    {
    id: 37,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/daruma.jpeg"),
    title: "Daruma",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Deities, Flowers, Lucky Charms, Scattered Faces (Men Chirashi)",
  },
    {
    id: 38,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/firemen.webp"),
    title: "Firefighters",
    artist: "Kunichika Toyohara,",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Cherry Blossoms (Sakura), Dragon (Ryū), Phoenix (Hō-Ō), Tatooed Firefighters, Tattooed Water Elements",
  },
    {
    id: 39,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/fujiwara.jpeg"),
    title: "Fujiwara no Hidesato",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Flowers, Giant Centipede (Ōmukade)",
  },
    {
    id: 40,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/hakamadareKidomaru.jpeg"),
    title: "Hakamadare and Kidōmaru",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Birds of Prey, Cherry Blossoms (Sakura), Demon (Oni), Maple Leaves (Momiji), Snake (Hebi)",
  },
    {
    id: 41,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/hanjoDanjo.jpeg"),
    title: "Hanjō Danjō no Jō Arakage and the Giant Salamander",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Giant Salamander (Ō Sanshō-Ō), Wild Beasts",
  },
    {
    id: 42,
    category: "Folklore/History",
    imageUri: require("../assets/folklore/hannya1.jpeg"),
    title: "Hannya",
    artist: " Yoshitoshi",
    tattooBackgrounds: "Clouds",
    pairings: "Flowers, Scattered Faces (Men Chirashi), Snake (Hebi)",
  },
  {
    id: 43,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/hayakawa.jpeg"),
    title: "Hayakawa Ayunosuke",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Enemy Soldiers, Flowers",
  },
    {
    id: 44,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/higuchi.jpeg"),
    title: "Higuchi Kanemitsue",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Wild Beasts",
  },
    {
    id: 45,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/igaTakiyasha.jpeg"),
    title: "Iga Jutarō and Takiyasha-Hime",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Maple Leaves (Momiji), Spider (Kumo), Toads (Gama)",
  },
    {
    id: 46,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/hayataNue.webp"),
    title: "I No Hayata and the Nue",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Lightening",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Maple Leaves (Momiji)",
  },
    {
    id: 47,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/ishikawa.jpeg"),
    title: "Ishikawa Goemon",
    artist: "Kunichika",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soliders, Flowers",
  },
    {
    id: 48,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/jigoku.jpeg"),
    title: "Jigoku Dayū",
    artist: "Kunichika",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparitions (Yōkai), Cherry Blossoms (Sakura), Demons (Oni), Enma, Maple Leaves (Momiji), Skeletons",
  },
    {
    id: 49,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/jiraiyaTsunade.webp"),
    title: "Jiraiya and Tsunade",
    artist: "Kunisada",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Giant Snake (Orochi), Orochimaru, Slug (Namekuji), Toad (Gama)",
  },
    {
    id: 50,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/kamigashi.jpeg"),
    title: "Kamigashi-hime",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Spider (Kumo), Tsuchigumo, Wild Beasts",
  },
    {
    id: 51,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/kanu.jpeg"),
    title: "Kanu Unchō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Chōchi, Human Enemies, Ryūbi",
  },
    {
    id: 52,
    category: "Folklore/History",
    imageUri: require("../assets/folklore/kazusa.webp"),
    title: "Kazusa Hirotsune",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Fox (Kitsune), Nine-Tailed Fox (Kyūbi no Kitsune)",
  },
  {
    id: 53,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/kintaro.jpeg"),
    title: "Kintarō",
    artist: "Kitagawa Tsukimaro",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Bear (Kuma), Boar (Inoshishi), Carp (Koi), Cherry Blossoms (Sakura), Maple Leaves (Mimiji), Snake (Hebi)",
  },
    {
    id: 54,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/kiyohime.jpeg"),
    title: "Kiyohime",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Cherry Blossoms (Sakura), Dragon (Ryū), Snake (Hebi)",
  },
    {
    id: 55,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/tsunetomo.png"),
    title: "Minamoto no Tsunetomo",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Enemy Soldiers, Flowers, Wild Beasts",
  },
    {
    id: 56,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/yorimitsu.jpg"),
    title: "Minamoto no Yorimitsu",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Flowers, Four Heavenly Kings (Shi Ten-Ō), Shuten Dōji, Tsuchigumo",
  },
    {
    id: 57,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/yoshitsune.jpeg"),
    title: "Minamoto no Yoshitsune",
    artist: "Kunisada",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Wild Beasts",
  },
    {
    id: 58,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/musashi.jpeg"),
    title: "Miyamoto Musashi",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Demon (Oni), Enemy Soldiers, Flowers, Wild Beasts",
  },
    {
    id: 59,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/momotaro.jpg"),
    title: "Momotarō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Demon (Oni), Dog (Inu), Flowers, Monkey (Saru), Pheasant (Kiji), Peach (Momo)",
  },
    {
    id: 60,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/mongaku.png"),
    title: "Mongaku",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Water",
    pairings: "Fudō Myo-Ō, Kongara Dōji and Seitaka Dōji",
  },
    {
    id: 61,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/onibaba1.jpeg"),
    title: "Onibaba",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Victims",
  },
    {
    id: 62,
    category: "Folklore/History",
    imageUri: require("../assets/folklore/oniwakamaru.jpeg"),
    title: "Oniwakamaru",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Carp (Koi), Flowers, Human Enemies",
  },
  {
    id: 63,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/ryu.jpeg"),
    title: "Ryū-Ō Tarō",
    artist: "Utagawa Kuniteru",
    tattooBackgrounds: "Clouds",
    pairings: "Dragon (Ryū)",
  },
    {
    id: 64,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/saginoike.jpeg"),
    title: "Saginoike Heikurō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Human Enemies, Severed Heads (Namakubi), Snake (Hebi), Wild Beasts",
  },
    {
    id: 65,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/sato.jpeg"),
    title: "Satō Masakiyo",
    artist: "Utagawa Kuniteru II",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparation (Yōkai), Enemy Soldiers, Flowers, Wild Beasts",
  },
    {
    id: 66,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/shimose.jpeg"),
    title: "Shimose Kaga",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Giant Snake (Orochi)",
  },
    {
    id: 67,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/shoki.jpeg"),
    title: "Shoki",
    artist: "Kawanabe Kyosai",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Demons (Oni), Flowers, Tiger (Tora)",
  },
    {
    id: 68,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/sonGoku.jpg"),
    title: "Son Goku",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Chohakkai, Demons (Oni), Dragon (Ryū), Flowers, Genjō Sanzō, Monkeys, Sa Gojo",
  },
    {
    id: 69,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/taira.jpeg"),
    title: "Taira no Tomomori",
    artist: "Toyohara Kunichika",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Heikegani, Sea Creatures",
  },
    {
    id: 70,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/tamatori.jpeg"),
    title: "Tamatori-hime",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Water",
    pairings: "Dragon (Ryū), Sea Creatures",
  },
    {
    id: 71,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/tenjiku.jpeg"),
    title: "Tenjik Tokubei",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Snake (Hebi), Spider (Toma), Toads (Gama)",
  },
    {
    id: 72,
    category: "Folklore/History",
    imageUri: require("../assets/folklore/toki.jpeg"),
    title: "Toki Daishirō Motosada",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Amida Buddha (Amida Hotoke), Apparition (Yōkai), Demon (Oni), Flowers, Ma-Ō, Ni-Ō",
  },
  {
    id: 73,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/tomoe.jpeg"),
    title: "Tomoe Gozen",
    artist: "Toyohara Chikanobu",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Horse",
  },
    {
    id: 74,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/washio.jpeg"),
    title: "Washio Saburō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Bear (Kuma), Boar (Inoshishi), Giant Snake (Orochi), Minamoto no Yoshitsune, Wild Beasts",
  },
      {
    id: 75,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/watanabe.jpeg"),
    title: "Watanabe no Tsuna",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Demon (Oni), Ibaraki-dōji, Snake (Hebi), Spider (Toma), Tsuchigumo",
  },
  
]
const Folklore = () => {
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
      data={folkloreData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2} // Set the number of columns you want here
      contentContainerStyle={styles.container}
    />
  );
};

export default Folklore;

const styles = StyleSheet.create({
  container: {
    // Add or adjust styles for the container if needed
    paddingHorizontal: 10, // Adjust padding as needed
    backgroundColor:'#cfc0a7'
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