import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import DeitiesScreen from '../pages/Deities.js';
import FaunaScreen from '../pages/Fauna.js';
import FloraScreen from '../pages/Flora.js';
import FolkloreScreen from '../pages/Folklore.js';
import SuikodenScreen from '../pages/Suikoden.js';
import SupernaturalScreen from '../pages/Supernatural.js';

function CategoryScreen({ navigation }) {
  // Function to navigate to a specific category page
  
  const navigateToCategory = (categoryScreen) => {
     console.log(`Navigating to ${categoryScreen}`);
    navigation.navigate(categoryScreen);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity onPress={() => navigateToCategory('DeitiesScreen')}>
          <View style={styles.category}>
            <Image
              source={require("../assets/deities/sevenLuckyGods.jpeg")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>Deities</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory('FaunaScreen')}>
          <View style={styles.category}>
            <Image
              source={require("../assets/fauna/kitsune.jpeg")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>Fauna</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory('FloraScreen')}>
          <View style={styles.category}>
            <Image
              source={require("../assets/flora/peony.jpeg")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>Flora</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory('FolkloreScreen')}>
          <View style={styles.category}>
            <Image
              source={require("../assets/folklore/onibaba.jpeg")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>Folklore</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory('SuikodenScreen')}>
          <View style={styles.category}>
            <Image
              source={require("../assets/suikoden/senkaji.jpeg")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>Suikoden</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory('SupernaturalScreen')}>
          <View style={styles.category}>
            <Image
              source={require("../assets/supernatural/baku.jpeg")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>Supernatural</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default CategoryScreen;

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
