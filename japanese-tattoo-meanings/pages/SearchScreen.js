import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

//autofill 
//display pages re: each search category 
const SearchScreen = ({ closeModal }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        autoFocus={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23231c',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    color: '#fff',
  },
});

export default SearchScreen;
