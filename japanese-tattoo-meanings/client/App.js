  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
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
  import SuggestionScreen from './pages/SuggestionScreen.js';
  import ImageDetailScreen from './components/ImageDetailScreen.js';
  // import ChatbotScreen from './pages/ChatbotScreen.js';

  const Stack = createStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="AboutScreen" component={AboutScreen} />
          <Stack.Screen name="DeitiesScreen" component={DeitiesScreen} />
          <Stack.Screen name="FaunaScreen" component={FaunaScreen} />
          <Stack.Screen name="FloraScreen" component={FloraScreen} /> 
          <Stack.Screen name="FolkloreScreen" component={FolkloreScreen} />
          <Stack.Screen name="SupernaturalScreen" component={SupernaturalScreen} />
          <Stack.Screen name="SuikodenScreen" component={SuikodenScreen} />
          <Stack.Screen name="SuggestionScreen" component={SuggestionScreen} />
          <Stack.Screen name="ImageDetailScreen" component={ImageDetailScreen} />
          {/* <Stack.Screen name="ChatbotScreen" component={ChatbotScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
