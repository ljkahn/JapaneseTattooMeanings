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
    website: '',
  });

  import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { colors, globalStyles } from '../styles/styles';

const ProfileScreen = ({ navigation }) => {
  const { userToken, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [imageUri, setImageUri] = useState('');

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      await handleUploadImage(result.assets[0].uri);
    }
  };

  const handleUploadImage = async (uri) => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri,
        name: 'profile_image.jpg',
        type: 'image/jpeg',
      });

      const response = await axios.post('http://localhost:4001/api/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        const imageUrl = response.data.url;
        Alert.alert('Image uploaded successfully', `Image URL: ${imageUrl}`);
        console.log('Image URL:', imageUrl);
      } else {
        Alert.alert('Image upload failed', response.data.message);
      }
    } catch (error) {
      console.error('Error uploading image:', error.message);
      Alert.alert('Image upload error', 'Please try again later.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[globalStyles.text, styles.title]}>Profile</Text>

      <TouchableOpacity style={styles.button} onPress={handlePickImage}>
        <Text style={styles.buttonText}>Upload Profile Image</Text>
      </TouchableOpacity>

      {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}

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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default ProfileScreen;


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log('Fetching profile...');
        const response = await axios.post(
          'http://localhost:4001/graphql', // Replace with your local IP address
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

        console.log('Profile fetch response:', response.data);

        if (response.data.errors) {
          console.error('GraphQL errors:', response.data.errors);
          Alert.alert('Error fetching profile');
        } else {
          const profileData = response.data.data.me;
          if (!profileData) {
            console.error('Profile data is null');
            Alert.alert('Profile not found', 'Please create a profile first.');
            navigation.navigate('CreateProfileScreen'); // Redirect to create profile if data is null
          } else {
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
        }
      } catch (error) {
        console.error('Error fetching profile:', error.message);
        Alert.alert('Error fetching profile', 'Please try again later.');
      }
    };

    fetchProfile();
  }, [userToken]);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      console.log('Saving profile changes:', formData);
      const response = await axios.post(
        'http://192.168.x.x:4001/graphql', // Replace with your local IP address
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

      console.log('Profile update response:', response.data);

      if (response.data.errors) {
        console.error('Error updating profile:', response.data.errors);
        Alert.alert('Profile update failed');
      } else {
        setProfile(response.data.data.updateProfile);
        setIsEditing(false);
        Alert.alert('Profile updated successfully');
      }
    } catch (error) {
      console.error('Error updating profile:', error.message);
      Alert.alert('Error updating profile', 'Please try again later.');
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
          <Text style={styles.profileText}>Username: {profile?.username || 'N/A'}</Text>
          <Text style={styles.profileText}>Location: {profile?.location || 'N/A'}</Text>
          <Text style={styles.profileText}>Style: {profile?.style || 'N/A'}</Text>
          <Text style={styles.profileText}>Price: ${profile?.price || 'N/A'}</Text>
          <Text style={styles.profileText}>Bio: {profile?.bio || 'N/A'}</Text>
          <Text style={styles.profileText}>Website: {profile?.website || 'N/A'}</Text>
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
