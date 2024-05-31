import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './pages/HomeScreen.js';
import CategoryScreen from './pages/CategoryScreen.js';
import SearchScreen from './pages/SearchScreen.js';
import AboutScreen from './pages/AboutScreen.js';


import DeitiesScreen from './pages/DeitiesScreen.js';
import FaunaScreen from './pages/FaunaScreen.js';
import FloraScreen from './pages/FloraScreen.js';
import FolkloreScreen from './pages/FolkloreScreen.js';
import SupernaturalScreen from './pages/SupernaturalScreen.js';
import SuikodenScreen from './pages/SuikodenScreen.js';
import ImageDetailScreen from "./components/ImageDetailScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; color = '#23231c';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';color = '#000';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';color = '#000';
          } else if (route.name === 'About') {
            iconName = focused ? 'brush' : 'brush-outline'; color = '#000';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
     
    </Tab.Navigator>
  );
}

export default function App() {
  const [orientation, setOrientation] = useState('portrait');
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      setOrientation(width > height ? 'landscape' : 'portrait');
    });

    // Return a cleanup function that removes the event listener
    return () => {
      // Check if the subscription has a remove function and use it
      if (subscription.remove) {
        subscription.remove();
      } else {
        // Older versions of React Native might still require calling `removeEventListener`
        Dimensions.removeEventListener('change', updateOrientation);
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false, title: "Back" }} />
        <Stack.Screen name="DeitiesScreen" component={DeitiesScreen} />
        <Stack.Screen name="FaunaScreen" component={FaunaScreen} />
        <Stack.Screen name="FloraScreen" component={FloraScreen} />
        <Stack.Screen name="FolkloreScreen" component={FolkloreScreen} />
        <Stack.Screen name="SupernaturalScreen" component={SupernaturalScreen} />
        <Stack.Screen name="SuikodenScreen" component={SuikodenScreen} />
        <Stack.Screen name="ImageDetailScreen" component={ImageDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##c5cccf',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff"
  },
});
