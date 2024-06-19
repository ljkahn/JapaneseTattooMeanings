import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
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
      style={globalStyles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={globalStyles.container}>
        <Text style={[globalStyles.text, globalStyles.header]}>Welcome to the Japanese Tattooing App</Text>
        <Text style={globalStyles.text}>Unveiling the Timeless Art of Japanese Tattooing</Text>

        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('CategoryScreen')}>
          <Text style={globalStyles.buttonText}>Explore Categories</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.3,
  },
});

export default HomeScreen;
