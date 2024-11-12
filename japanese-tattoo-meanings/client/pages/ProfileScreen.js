import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { colors, globalStyles } from '../styles/styles';

const ProfileScreen = ({ navigation }) => {
  const { userToken, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    style: '',
    price: '',
    bio: '',
    website: ''
  });

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
          const profileData = response.data.data.me;
          setProfile(profileData);
          setFormData({
            username: profileData.username,
            location: profileData.location,
            style: profileData.style,
            price: profileData.price ? profileData.price.toString() : '',
            bio: profileData.bio,
            website: profileData.website,
          });
        }
      } catch (error) {
        console.error('Error fetching profile:', error.response ? error.response.data : error);
        Alert.alert('Error fetching profile');
      }
    };

    fetchProfile();
  }, [userToken]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4001/graphql',
        {
          query: `
            mutation {
              updateProfile(
                bio: "${formData.bio}",
                location: "${formData.location}",
                style: "${formData.style}",
                price: ${parseFloat(formData.price) || 0},
                website: "${formData.website}"
              ) {
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
        console.error('Error updating profile:', response.data.errors);
        Alert.alert('Profile update failed');
      } else {
        setProfile(response.data.data.updateProfile);
        setIsEditing(false);
        Alert.alert('Profile updated successfully');
      }
    } catch (error) {
      console.error('Error updating profile:', error.response ? error.response.data : error);
      Alert.alert('Error updating profile');
    }
  };

  if (!profile) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[globalStyles.text, styles.title]}>Profile</Text>

      {isEditing ? (
        <> 
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={formData.location}
            onChangeText={(text) => handleInputChange('location', text)}
          /> 
          <TextInput
            style={styles.input}
            placeholder="Style"
            value={formData.style}
            onChangeText={(text) => handleInputChange('style', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={formData.price}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('price', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Bio"
            value={formData.bio}
            onChangeText={(text) => handleInputChange('bio', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Website"
            value={formData.website}
            onChangeText={(text) => handleInputChange('website', text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.profileText}>Username: {profile.username}</Text>
          <Text style={styles.profileText}>Location: {profile.location}</Text>
          <Text style={styles.profileText}>Style: {profile.style}</Text>
          <Text style={styles.profileText}>Price: ${profile.price}</Text>
          <Text style={styles.profileText}>Bio: {profile.bio}</Text>
          <Text style={styles.profileText}>Website: {profile.website}</Text>
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={handleEditToggle}>
        <Text style={styles.buttonText}>{isEditing ? 'Cancel' : 'Edit Profile'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  profileText: {
    color: colors.text,
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: colors.inputBackground,
    color: colors.text,
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: colors.accent,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
  },
  loadingText: {
    fontSize: 18,
    color: colors.placeholderText,
    textAlign: 'center',
  },
});

export default ProfileScreen;
