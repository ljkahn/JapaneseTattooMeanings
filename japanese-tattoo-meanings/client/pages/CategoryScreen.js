import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { globalStyles, colors } from '../styles/styles';

// list of background images for the category screen
const images = [
  require('../assets/backgroundImages/crane1.jpeg'),
  require('../assets/backgroundImages/ebisu1.jpeg'),
  require('../assets/backgroundImages/kanchi1.jpeg'),
  require('../assets/backgroundImages/lotus1.jpeg'),
  require('../assets/backgroundImages/oniwakamaru1.jpeg'),
  require('../assets/backgroundImages/rokuro1.jpeg'),
];

// list of categories for navigation
const categories = [
  { id: 1, name: 'Deities', screen: 'DeitiesScreen' },
  { id: 2, name: 'Fauna', screen: 'FaunaScreen' },
  { id: 3, name: 'Flora', screen: 'FloraScreen' },
  { id: 4, name: 'Folklore', screen: 'FolkloreScreen' },
  { id: 5, name: 'Supernatural', screen: 'SupernaturalScreen' },
  { id: 6, name: 'Suikoden', screen: 'SuikodenScreen' },
];

function CategoryScreen({ navigation }) {
  // state to handle image index
  const [imageIndex, setImageIndex] = React.useState(0);

  // effect to handle image change every 3 seconds
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change image every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  // function to render each category item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryButton}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={globalStyles.categoryButtonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const numColumns = 2;

  return (
    <ImageBackground
      source={images[imageIndex]}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <FlatList
          key={numColumns} // change the key prop to force a fresh render
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns} // set the number of columns
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.3,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // this will create a dark overlay
    width: '100%',
    height: '100%',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButton: {
    backgroundColor: colors.accent,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.5, // adjust width for two columns
    height: Dimensions.get('window').width / 2.5, // make buttons square
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryScreen;
