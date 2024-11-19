import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from '../context/AuthContext';
import { colors, globalStyles } from '../styles/styles';

const ProfileScreen = ({ navigation }) => {
  const { userToken, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    style: '',
    price: '',
    bio: '',
    website: '',
  });

  // Fetch profile data
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
          Alert.alert('Error fetching profile');
        } else {
          const profileData = response.data.data.me;
          if (!profileData) {
            Alert.alert('Profile not found', 'Please create a profile first.');
            navigation.navigate('CreateProfileScreen');
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
        Alert.alert('Error fetching profile', 'Please try again later.');
      }
    };

    fetchProfile();
  }, [userToken]);

  // Handle image picker
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  // Upload selected image
  const uploadImage = async () => {
  if (!selectedImage) {
    Alert.alert('No image selected!', 'Please pick an image first.');
    return;
  }

  const formData = new FormData();
  formData.append('image', {
    uri: selectedImage,
    type: 'image/jpeg', // Assuming JPEG; adjust based on actual file type
    name: 'profile-picture.jpg',
  });

  try {
    const response = await axios.post('http://localhost:4001/api/uploads/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Upload successful:', response.data);
    Alert.alert('Image uploaded successfully!');
  } catch (error) {
    console.error('Error uploading image:', error?.response?.data || error.message || error);
    Alert.alert(
      'Error uploading image',
      error?.response?.data?.message || 'Please try again later.'
    );
  }
};


  // Handle form input changes
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Toggle editing mode
  const handleEditToggle = () => setIsEditing(!isEditing);

  // Save profile changes
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
        Alert.alert('Profile update failed');
      } else {
        setProfile(response.data.data.updateProfile);
        setIsEditing(false);
        Alert.alert('Profile updated successfully');
      }
    } catch (error) {
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[styles.container, { paddingBottom: 50 }]}
        keyboardShouldPersistTaps="handled"
      >
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
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Pick a Profile Picture</Text>
            </TouchableOpacity>
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
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
            {profile.image && <Image source={{ uri: profile.image }} style={styles.image} />}
          </>
        )}

        <TouchableOpacity style={styles.button} onPress={uploadImage}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditToggle}>
          <Text style={styles.buttonText}>{isEditing ? 'Cancel' : 'Edit Profile'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    flexGrow: 1,
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default ProfileScreen;
