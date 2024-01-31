import { View, Text } from 'react-native'
import React from 'react'
import ImageData from "../data/imageData"

const CategoryScreen = ({ navigation }) => {
  // Function to navigate to ImageDetail screen with selected image data
  const handleImagePress = (imageData) => {
    navigation.navigate("ImageDetail", { imageData });
  };

  return (
    <View>
      {imageData.map((image) => (
        <TouchableOpacity
          key={image.id}
          onPress={() => handleImagePress(image)}
        >
          <Image source={image.imageUri} />
          <Text>{image.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryScreen;