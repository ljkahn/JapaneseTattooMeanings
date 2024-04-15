import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, StyleSheet, Animated, ImageBackground } from 'react-native';

const backgroundImages = [
  require("../assets/backgroundImages/crane1.jpeg"),
  require("../assets/backgroundImages/ebisu1.jpeg"),
  require("../assets/backgroundImages/kanchi1.jpeg"),
  require("../assets/backgroundImages/lotus1.jpeg"),
  require("../assets/backgroundImages/oniwakamaru1.jpeg"),
  require("../assets/backgroundImages/rokuro1.jpeg"),
];

function HomeScreen({ handleHistoryPress, handleCategoriesPress }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const opacityAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    };

    const changeImage = () => {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length); // Cycle through the images
        fadeIn(); // Fade in the next image
      });
    };

    fadeIn(); // Start the initial fade-in animation

    const intervalId = setInterval(() => {
      changeImage(); // Change the image every 6 seconds (5000ms fade in + 1000ms fade out)
    }, 6000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [opacityAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: opacityAnim, width: '100%', height: '100%' }}>
        <ImageBackground
          source={backgroundImages[currentImageIndex]}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <Text style={{ color: "#fff", backgroundColor: "#23231c" }}>Welcome to the Japanese Tattooing App</Text>
          <Text style={{ color: "#fff", backgroundColor: "#23231c"  }}>Unveiling the Timeless Art of Japanese Tattooing</Text>
          <StatusBar style="auto" />
        </ImageBackground>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
