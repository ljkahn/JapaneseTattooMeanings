import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { globalStyles, colors } from '../styles/styles';

const images = [
  require('../assets/backgroundImages/crane1.jpeg'),
  require('../assets/backgroundImages/ebisu1.jpeg'),
  require('../assets/backgroundImages/kanchi1.jpeg'),
  require('../assets/backgroundImages/lotus1.jpeg'),
  require('../assets/backgroundImages/oniwakamaru1.jpeg'),
  require('../assets/backgroundImages/rokuro1.jpeg'),
];

function HomeScreen({ navigation }) {
  const [imageIndex, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ImageBackground
      source={images[imageIndex]}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={[globalStyles.text, styles.title]}>Welcome to the Japanese Tattooing App</Text>
        <Text style={globalStyles.text}>Unveiling the Timeless Art of Japanese Tattooing</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('CategoryScreen')}>
            <Text style={styles.buttonText}>Explore Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('SearchScreen')}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.rectangleButton} onPress={() => navigation.navigate('AboutScreen')}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // This will create a dark overlay
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  squareButton: {
    backgroundColor: colors.accent,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 100, // Make the buttons square
  },
  rectangleButton: {
    backgroundColor: colors.accent,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
