import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Japanese Tattoo Meanings App</Text>
      <Button title="Categories" onPress={() => navigation.navigate('CategoryScreen')} />
      <Button title="Search" onPress={() => navigation.navigate('SearchScreen')} />
      <Button title="About" onPress={() => navigation.navigate('AboutScreen')} />
      <Button title="Create Profile" onPress={() => navigation.navigate('ProfileScreen')} />
    </View>
  );
};

export default HomeScreen;
