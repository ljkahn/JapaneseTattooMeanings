import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { userToken, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null); // Initialize as null

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.post(
          'http://localhost:4001/graphql',
          {
            query: `
              query {
                me {
                  id
                  username
                  bio
                  location
                  style
                  price
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

        if (response.data.errors) {
          console.error('GraphQL errors:', response.data.errors);
          Alert.alert('Error fetching profile');
        } else {
          setProfile(response.data.data.me); // Set profile data
        }
      } catch (error) {
        console.error('Error fetching profile:', error.response ? error.response.data : error);
        Alert.alert('Error fetching profile');
      }
    };

    fetchProfile();
  }, [userToken]);

  // Check if profile data is loaded
  if (!profile) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: {profile.username}</Text>
      <Text>Location: {profile.location}</Text>
      <Text>Style: {profile.style}</Text>
      <Text>Price: {profile.price}</Text>
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
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProfileScreen;
