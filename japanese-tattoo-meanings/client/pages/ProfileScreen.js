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

  // Function to fetch profile details on load
 const fetchProfile = async () => {
  try {
    const response = await axios.post( 
      'http://localhost:4001/graphql',
      {
        query: `
          query {
            me {
              name
              location
              tattooStyle
              price
              bio
              website
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

    const profileData = response.data.data.me;
    if (profileData) {
      setName(profileData.name || '');
      setLocation(profileData.location || '');
      setTattooStyle(profileData.tattooStyle || '');
      setPrice(profileData.price ? profileData.price.toString() : '');
      setBio(profileData.bio || '');
      setWebsite(profileData.website || '');
    } else {
      Alert.alert('Failed to fetch profile data');
    }
  } catch (error) {
    console.error('Error fetching profile:', error.response || error);
    Alert.alert('Error fetching profile');
  }
};


  // Fetch profile data when component mounts
  useEffect(() => {
    fetchProfile();
  }, []);

 const handleUpdateProfile = async () => {
  const parsedPrice = parseFloat(price);

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
              price: ${isNaN(parsedPrice) ? 0 : parsedPrice}
            ) {
              name
              location
              tattooStyle
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

    const updatedProfile = response.data.data.updateProfile;
    if (updatedProfile) {
      Alert.alert('Profile updated successfully');
      // Optionally, navigate to the profile screen or show the updated details here
      // navigation.navigate('ProfileScreen');
    } else {
      Alert.alert('Profile update failed');
    }
  } catch (error) {
    console.error('Error updating profile:', error.response || error);
    Alert.alert('Error updating profile');
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />
      <TextInput placeholder="Tattoo Style" value={tattooStyle} onChangeText={setTattooStyle} style={styles.input} />
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
