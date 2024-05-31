import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';

const categories = [
  { name: 'Deities', image: require("../assets/deities/sevenLuckyGods.jpeg"), screen: 'DeitiesScreen' },
  { name: 'Fauna', image: require("../assets/fauna/kitsune.jpeg"), screen: 'FaunaScreen' },
  { name: 'Flora', image: require("../assets/flora/peony.jpeg"), screen: 'FloraScreen' },
  { name: 'Folklore', image: require("../assets/folklore/onibaba.jpeg"), screen: 'FolkloreScreen' },
  { name: 'Suikoden', image: require("../assets/suikoden/senkaji.jpeg"), screen: 'SuikodenScreen' },
  { name: 'Supernatural', image: require("../assets/supernatural/baku.jpeg"), screen: 'SupernaturalScreen' },
];

function CategoryScreen({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableScale
      onPress={() => navigation.navigate(item.screen)}
      style={styles.category}
    >
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableScale>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={item => item.name}
      numColumns={2}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
}

export default CategoryScreen;

const TouchableScale = ({ children, onPress, style }) => {
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={style}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#ae4d4d',  // Dark green background
  },
  category: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginBottom: 20,
    backgroundColor: '#D8D0C1',  // Lighter box color for contrast
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginTop: 10,
  },
 text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',  // Center text horizontally
  },
});
