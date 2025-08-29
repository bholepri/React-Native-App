import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import image1 from '../assets/images/BigData.png';
import image2 from '../assets/images/CloudComputing.png';

const screenWidth = Dimensions.get('window').width;

const Certifications = () => {
  return (
    <ScrollView className="flex-1 bg-purple-200">
      <Text className="text-3xl text-center font-bold text-purple-800 my-6 mt-6">
        My Certifications
      </Text>

      {/* Certificate 1 */}
      <View className="items-center mb-8">
        <Image
          source={image1}
          style={{
            width: screenWidth * 0.9, // 90% of screen width
            height: 250,
            borderRadius: 12,
          }}
          resizeMode="contain"
        />
        <Text className="mt-3 text-xl font-semibold text-gray-700">
          Big Data Computing
        </Text>
      </View>

      {/* Certificate 2 */}
      <View className="items-center mb-8">
        <Image
          source={image2}
          style={{
            width: screenWidth * 0.9,
            height: 250,
            borderRadius: 12,
          }}
          resizeMode="contain"
        />
        <Text className="mt-3 text-xl font-semibold text-gray-700">
          Cloud Computing
        </Text>
      </View>
    </ScrollView>
  );
};

export default Certifications;
