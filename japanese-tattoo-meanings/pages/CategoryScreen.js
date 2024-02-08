
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function CategoryScreen() {
  return (
    <View style={styles.container}>
              <Image
          source={require("../assets/deities/sevenLuckyGods.jpeg")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      <Text>
        Deities
      </Text>

            <Text>
        Fauna
      </Text>
            <Text>
        Flora
      </Text>
            <Text>
        Folklore
      </Text>
            <Text>
        Suikoden
      </Text>
            <Text>
        Supernatural
      </Text>
      <Image></Image>
    </View>
  );
}

export default CategoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23231c',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff"
  },
});