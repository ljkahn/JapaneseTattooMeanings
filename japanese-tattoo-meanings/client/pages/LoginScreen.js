// pages/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/graphql', {
        query: `
          mutation {
            login(username: "${username}", password: "${password}")
          }
        `
      });
      const token = response.data.data.login;
      if (token) {
        navigation.navigate('ProfileScreen', { token });
      } else {
        Alert.alert('Login failed');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error logging in');
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
