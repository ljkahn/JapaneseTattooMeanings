// App.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './pages/HomeScreen.js';
import CategoryScreen from './pages/CategoryScreen.js';
import SearchScreen from './pages/SearchScreen.js';
import DeitiesScreen from './pages/DeitiesScreen.js';
import FaunaScreen from './pages/FaunaScreen.js';
import FloraScreen from './pages/FloraScreen.js';
import FolkloreScreen from './pages/FolkloreScreen.js';
import SupernaturalScreen from './pages/SupernaturalScreen.js';
import SuikodenScreen from './pages/SuikodenScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="DeitiesScreen" component={DeitiesScreen} />
        <Stack.Screen name="FaunaScreen" component={FaunaScreen} />
        <Stack.Screen name="FolkloreScreen" component={FolkloreScreen} />
        <Stack.Screen name="SuikodenScreen" component={SuikodenScreen} />
        <Stack.Screen name="FloraScreen" component={FloraScreen} />
       <Stack.Screen name="SupernaturalScreen" component={SupernaturalScreen} />

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
