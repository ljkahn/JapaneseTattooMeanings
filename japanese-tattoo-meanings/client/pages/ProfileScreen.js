// pages/ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const ProfileScreen = ({ route, navigation }) => {
  const { token } = route.params;
  const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');
  const [images, setImages] = useState('');

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.post('http://localhost:3001/graphql', {
        query: `
          mutation {
            updateProfile(bio: "${bio}", website: "${website}", images: ["${images}"]) {
              bio
              website
              images
            }
          }
        `,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const updatedProfile = response.data.data.updateProfile;
      if (updatedProfile) {
        Alert.alert('Profile updated');
      } else {
        Alert.alert('Profile update failed');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error updating profile');
    }
  };

  return (
    <View>
      <Text>Profile</Text>
      <TextInput placeholder="Bio" value={bio} onChangeText={setBio} />
      <TextInput placeholder="Website" value={setWebsite} onChangeText={setWebsite} />
      <TextInput placeholder="Images" value={setImages} onChangeText={setImages} />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

export default ProfileScreen;
