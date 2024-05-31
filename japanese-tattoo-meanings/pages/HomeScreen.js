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
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    };

    const changeImage = () => {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        fadeIn();
      });
    };

    fadeIn();

    const intervalId = setInterval(changeImage, 4000);

    return () => clearInterval(intervalId);
  }, [opacityAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, { opacity: opacityAnim }]}>
        <ImageBackground
          source={backgroundImages[currentImageIndex]}
          style={styles.imageBackground}
          resizeMode="cover"
        />
      </Animated.View>
      <View style={styles.textOverlay}>
        <Text style={styles.textStyle}>Welcome to the Japanese Tattooing App</Text>
        <Text style={styles.textStyle}>Unveiling the Timeless Art of Japanese Tattooing</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  textStyle: {
    color: "#fff",
    backgroundColor: "#23231c80", // semi-transparent background
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
});

export default HomeScreen;
