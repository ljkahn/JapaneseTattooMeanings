import React from "react";
import { View, Text, Image } from "react-native";

const ImageDetail = ({ route }) => {
  const { imageUri, description } = route.params;

  return (
    <View>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <Text>{description}</Text>
    </View>
  );
};

export default ImageDetail;