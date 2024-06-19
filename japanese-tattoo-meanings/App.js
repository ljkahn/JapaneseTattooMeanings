import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import CategoryScreen from './pages/CategoryScreen';
import DeitiesScreen from './pages/DeitiesScreen';
import FaunaScreen from './pages/FaunaScreen';
import FloraScreen from './pages/FloraScreen';
import FolkloreScreen from './pages/FolkloreScreen';
import SupernaturalScreen from './pages/SupernaturalScreen';
import SuikodenScreen from './pages/SuikodenScreen';
import ImageDetailScreen from './components/ImageDetailScreen';
import { StyleSheet, View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Prevents the splash screen from auto-hiding

const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    const prepare = async () => {
      try {
        // Perform any pre-loading tasks here, if needed
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Deities" component={DeitiesScreen} />
        <Stack.Screen name="Fauna" component={FaunaScreen} />
        <Stack.Screen name="Flora" component={FloraScreen} />
        <Stack.Screen name="Folklore" component={FolkloreScreen} />
        <Stack.Screen name="Supernatural" component={SupernaturalScreen} />
        <Stack.Screen name="Suikoden" component={SuikodenScreen} />
        <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', // Beige color as per your preference
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000', // Black text color
  },
});
