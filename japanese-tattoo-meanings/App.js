import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './pages/CategoryScreen';
import HistoryScreen from './pages/HistoryScreen';
import HomeScreen from './pages/HomeScreen';

const Stack = createNativeStackNavigator();

// Define the navigation logic for the Home screen
function HomeScreenNavigation() {
  const navigation = useNavigation(); // Get the navigation object using useNavigation hook

  const handleHistoryPress = () => {
    navigation.navigate('HistoryScreen'); // Navigate to the HistoryScreen
  };

  const handleCategoriesPress = () => {
    navigation.navigate('CategoryScreen'); // Navigate to the CategoryScreen
  };

  return (
    <HomeScreen
      handleHistoryPress={handleHistoryPress}
      handleCategoriesPress={handleCategoriesPress}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenNavigation} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
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
