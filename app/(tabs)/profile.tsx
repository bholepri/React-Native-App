import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import image from '../../assets/images/my-photo.png';

const Profile = () => {
  const handleLink = (url) => Linking.openURL(url);

  return (
    <ScrollView className="flex-1 bg-purple-200 px-6 pt-10 mt-10">
      {/* Header */}
      <View className="items-center mb-8">
        <Image
          source={image}
          className="w-28 h-28 rounded-full mb-4"
        />
        <Text className="text-2xl font-bold text-purple-800">Priyanka Bhole</Text>
        <Text className="text-sm text-gray-500">Software Developer</Text>
      </View>

      {/* Info Section */}
      <View className="bg-gray-50 p-6 rounded-2xl shadow-sm mb-6">
        <View className="flex-row items-center mb-3">
          <MaterialIcons name="email" size={20} color="#6B21A8" />
          <Text className="ml-3 text-gray-700">priyankabhole2004@gmail.com</Text>
        </View>
        <View className="flex-row items-center mb-3">
          <FontAwesome name="birthday-cake" size={20} color="#6B21A8" />
          <Text className="ml-3 text-gray-700">30-05-2004</Text>
        </View>
        <View className="flex-row items-center mb-3">
          <Feather name="phone" size={20} color="#6B21A8" />
          <Text className="ml-3 text-gray-700">+91 9607060140</Text>
        </View>
      </View>

      {/* Social Links */}
      <View className="bg-white p-4 rounded-2xl border border-purple-200 mb-8 space-y-3">
        <TouchableOpacity
          className="flex-row items-center mb-4"
          onPress={() =>
            handleLink("https://www.linkedin.com/in/priyanka-bhole-3a1b3124b/")
          }
        >
          <Feather name="linkedin" size={20} color="#2563EB" />
          <Text className="ml-3 text-blue-600 ">
            linkedin.com/in/priyanka-bhole
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => handleLink("https://github.com/bholepri")}
        >
          <Feather name="github" size={20} color="#000" />
          <Text className="ml-3 text-blue-600 ">
            github.com/bholepri
          </Text>
        </TouchableOpacity>
      </View>

      {/* Certifications Button */}
      <View className="mb-6">
        <Link
          href="/certifications"
          asChild
        >
          <TouchableOpacity className="bg-purple-100 self-center border w-60 border-purple-300 px-4 py-3 rounded-full items-center">
            <Text className=" text-purple-700 font-semibold">View Certifications</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Resume Button */}
      <TouchableOpacity
        onPress={() =>
          handleLink(
            "https://drive.google.com/file/d/1p3O31_6zsw1gfgLvJk7AT5IGgoj8G-6b/view?usp=sharing"
          )
        }
        className="bg-purple-700 px-6 py-3 w-60 self-center rounded-full items-center shadow-lg mb-12"
      >
        <Text className="text-white font-semibold text-base">Download Resume</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
