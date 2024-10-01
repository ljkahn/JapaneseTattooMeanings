// pages/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { globalStyles, colors } from '../styles/styles'; // Ensure you have these styles set up

const images = [
  require('../assets/backgroundImages/crane1.jpeg'),
  require('../assets/backgroundImages/ebisu1.jpeg'),
  require('../assets/backgroundImages/kanchi1.jpeg'),
  require('../assets/backgroundImages/lotus1.jpeg'),
  require('../assets/backgroundImages/oniwakamaru1.jpeg'),
  require('../assets/backgroundImages/rokuro1.jpeg'),
];

const HomeScreen = ({ navigation }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [imageIndex, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change image every 3 seconds
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
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('SuggestionScreen')}>
            <Text style={styles.buttonText}>Suggestions</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.rectangleButton} onPress={() => navigation.navigate('AboutScreen')}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>

        {isLoggedIn ? (
          <View style={styles.topRightButtons}>
            <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('ProfileScreen')}>
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallButton} onPress={logout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.topRightButtons}>
            <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 100,
    opacity: 0.7,
  },
  rectangleButton: {
    backgroundColor: colors.accent,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    opacity: 0.7,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
    textAlign: 'center',
  },
  topRightButtons: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallButton: {
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    opacity: 0.7,
  },
});

export default HomeScreen;
