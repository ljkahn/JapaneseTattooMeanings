// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, AuthProvider } from './context/AuthContext';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProfileScreen from './pages/ProfileScreen';
import SearchScreen from './pages/SearchScreen';
import CategoryScreen from './pages/CategoryScreen';
import SuggestionScreen from './pages/SuggestionScreen'; // Import SuggestionScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {/* Home screen is accessible without authentication */}
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      
      {/* Add additional screens to the stack */}
      <Stack.Screen 
        name="CategoryScreen" 
        component={CategoryScreen} 
        options={{ title: 'Categories' }}
      />
      <Stack.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{ title: 'Search' }}
      />
      <Stack.Screen 
        name="SuggestionScreen" 
        component={SuggestionScreen} 
        options={{ title: 'Suggestions' }}
      />

      {/* Authenticated Screens */}
      {userToken ? (
        <>
          <Stack.Screen 
            name="ProfileScreen" 
            component={ProfileScreen} 
            options={{ title: 'Profile' }} 
          />
        </>
      ) : (
        <>
          {/* Non-authenticated Screens */}
          <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen} 
            options={{ headerShown: false }} 
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
