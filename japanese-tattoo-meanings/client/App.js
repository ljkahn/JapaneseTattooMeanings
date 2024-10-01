// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, AuthProvider } from './context/AuthContext';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProfileScreen from './pages/ProfileScreen';

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
