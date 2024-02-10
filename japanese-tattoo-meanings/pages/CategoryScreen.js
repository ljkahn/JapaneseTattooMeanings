import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

function CategoryScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.row}>
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
        </View>
        <View style={styles.row}>
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
        </View>
        <View style={styles.row}>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: windowWidth - 40, // Adjust the width to fit two images with margin
  },
  category: {
    alignItems: 'center',
    width: (windowWidth - 40) / 2 - 10, // Divide by 2 for two images in a row and subtract margin
  },
  image: {
    width: '100%', // Adjust the width to fit the container
    height: 200,
  },
  text: {
    color: '#fff',
  },
});
