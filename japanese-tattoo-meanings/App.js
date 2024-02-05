import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import {  NativeBaseProvider } from "native-base";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import CategorySelector from './components/CategorySelector'

const Stack =  createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Welcome to Home Screen' }}
        />
        <Stack.Screen name="Categories" component={CategorySelector}
    <View style={styles.container}>
      <Text style={{ color: "#fff"}}>Japanese Tattooing App</Text>
<Image 
  source={require ("./assets/deities/Benzaiten.jpeg")} 
  style={{ width: 200, height: 200 }}
  resizeMode="contain"
/>
      
      <StatusBar style="auto" />
    </View>
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
