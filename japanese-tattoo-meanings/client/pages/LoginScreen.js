// pages/LoginScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { globalStyles, colors } from '../styles/styles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }

    login(username, password);
  };

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.overlay}>
        <Text style={[globalStyles.text, styles.title]}>Login</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor={colors.placeholderText}
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.placeholderText}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.linkText}>Don't have an account? Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.linkText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: colors.inputBackground,
    color: colors.text,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: colors.accent,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
  },
  linkText: {
    color: colors.linkText,
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default LoginScreen;
