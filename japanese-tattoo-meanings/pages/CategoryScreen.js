import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

function CategoryScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.category}>
          <Image
            source={require("../assets/deities/sevenLuckyGods.jpeg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Deities</Text>
        </View>
        <View style={styles.category}>
          <Image
            source={require("../assets/fauna/kitsune.jpeg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Fauna</Text>
        </View>
        <View style={styles.category}>
          <Image
            source={require("../assets/flora/peony.jpeg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Flora</Text>
        </View>
        <View style={styles.category}>
          <Image
            source={require("../assets/folklore/onibaba.jpeg")}
            style={styles.image}
            resizeMode="contain"
          />
  <Text style={styles.text}>Folklore</Text>
        </View>
        
        <View style={styles.category}>
          <Image
            source={require("../assets/suikoden/senkaji.jpeg")}
            style={styles.image}
            resizeMode="contain"
          />
  <Text style={styles.text}>Suikoden</Text>
        </View>
        <View style={styles.category}>
          <Image
            source={require("../assets/supernatural/baku.jpeg")}
            style={styles.image}
            resizeMode="contain"
          />
  <Text style={styles.text}>Supernatural</Text>
        </View>
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
