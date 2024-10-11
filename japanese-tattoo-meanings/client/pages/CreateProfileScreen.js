// CreateProfileScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const CreateProfileScreen = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [style, setStyle] = useState('');
  const [price, setPrice] = useState('');

  const handleCreateProfile = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4001/graphql',
        {
          query: `
            mutation {
              updateProfile(
                name: "${name}",
                location: "${location}",
                style: "${style}",
                price: ${parseFloat(price)}
              ) {
                name
                location
                style
                price
              }
            }
          `,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.data.data.updateProfile) {
        Alert.alert('Profile created successfully');
        navigation.navigate('ProfileScreen');
      } else {
        Alert.alert('Error creating profile');
      }
    } catch (error) {
      console.error('Error creating profile:', error);
      Alert.alert('Error creating profile');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Profile</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />
      <TextInput placeholder="Tattoo Style" value={style} onChangeText={setStyle} style={styles.input} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <Button title="Create Profile" onPress={handleCreateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
});

export default CreateProfileScreen;
