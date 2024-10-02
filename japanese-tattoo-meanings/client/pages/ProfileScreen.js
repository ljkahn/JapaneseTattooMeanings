import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { logout, userToken } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [location, setLocation] = useState(''); // Users can manually enter their location
  const [tattooStyle, setTattooStyle] = useState('');
  const [price, setPrice] = useState('');
  const [bio, setBio] = useState('')
  const [website, setWebsite] =useState ('');

const handleUpdateProfile = async () => {
  try {
    const response = await axios.post(
      'http://localhost:4001/graphql',
      {
        query: `
          mutation {
            updateProfile(
              bio: "${bio}",
              website: "${website}",
              location: "${location}",
              style: "${tattooStyle}",
              price: ${parseFloat(price)}
            ) {
              bio
              website
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

    console.log('Response data:', response.data);

    const updatedProfile = response.data.data.updateProfile;
    if (updatedProfile) {
      Alert.alert('Profile updated successfully');
    } else {
      Alert.alert('Profile update failed');
    }
  } catch (error) {
    console.error('Error updating profile:', error.response?.data || error.message);
    Alert.alert('Error updating profile');
  }
};



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />
       <TextInput placeholder="Bio" value={bio} onChangeText={setBio} style={styles.input} />
      <TextInput placeholder="Tattoo Style" value={tattooStyle} onChangeText={setTattooStyle} style={styles.input} />
        <TextInput placeholder="Website" value={website} onChangeText={setWebsite} style={styles.input} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
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
