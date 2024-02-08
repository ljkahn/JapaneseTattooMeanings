import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; // Import useNavigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Welcome to the Japanese Tattooing App</Text>
      <Text style={{ color: "#fff" }}>Unveiling the Timeless Art of Japanese Tattooing</Text>

      <TouchableOpacity onPress={() => navigate('DetailScreen')}> {/* Wrap Image with TouchableOpacity */}
        <Image
          source={require("./assets/deities/Benzaiten.jpeg")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={{ color: "#fff" }}>History</Text>

      <TouchableOpacity onPress={() => navigate('DetailScreen')}> {/* Wrap Image with TouchableOpacity */}
        <Image
          source={require("./assets/deities/Benzaiten.jpeg")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={{ color: "#fff" }}>Categories</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
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
