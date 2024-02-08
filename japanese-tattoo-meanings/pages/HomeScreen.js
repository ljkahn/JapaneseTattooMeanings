import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';

function HomeScreen({ handleHistoryPress, handleCategoriesPress }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Welcome to the Japanese Tattooing App</Text>
      <Text style={{ color: "#fff" }}>Unveiling the Timeless Art of Japanese Tattooing</Text>

      <TouchableOpacity onPress={handleHistoryPress}>
        <Image
          source={require("../assets/deities/Benzaiten.jpeg")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={{ color: "#fff" }}>History</Text>

      <TouchableOpacity onPress={handleCategoriesPress}>
        <Image
          source={require("../assets/deities/Benzaiten.jpeg")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={{ color: "#fff" }}>Categories</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23231c',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff"
  },
});

export default HomeScreen;
