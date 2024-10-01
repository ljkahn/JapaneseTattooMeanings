// pages/ProfileScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { logout, userToken } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [tattooStyle, setTattooStyle] = useState('');
  const [price, setPrice] = useState('');

const handleUpdateProfile = async () => {
  try {
    const response = await axios.post(
      'http://localhost:4001/graphql',
      {
        query: `
          mutation {
            updateProfile(
              name: "${name}",
              location: "${location}",
              tattooStyle: "${tattooStyle}",
              price: ${price || 0},
              profilePicture: "${profilePicture}",
              portfolioImages: ${JSON.stringify(portfolioImages)}
            ) {
              name
              location
              tattooStyle
              price
              profilePicture
              portfolioImages
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

    const updatedProfile = response.data.data.updateProfile;
    if (updatedProfile) {
      Alert.alert('Profile updated successfully');
    } else {
      Alert.alert('Profile update failed');
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    Alert.alert('Error updating profile');
  }
};




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <TextInput
        placeholder="Tattoo Style"
        value={tattooStyle}
        onChangeText={setTattooStyle}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default ProfileScreen;
