import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client'); // default to client

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation {
              register(username: "${username}", password: "${password}", role: "${role}") {
                token
              }
            }
          `,
        }),
      });

      const { data } = await response.json();
      const { token } = data.register;

      if (token) {
        login({ token, username, role });
        navigation.navigate('ProfileScreen');
      } else {
        // handle registration error
      }
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Client" onPress={() => setRole('client')} />
      <Button title="Artist" onPress={() => setRole('artist')} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
