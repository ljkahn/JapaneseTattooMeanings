import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function HistoryScreen() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>History Screen</Text>
      {/* Add your history screen content here */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ae4d4d',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#fff',
  },
});
export default HistoryScreen;
