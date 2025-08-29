import {
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import "../../global.css"; // NativeWind CSS

// Icon map for each route
const iconsMap = {
  index: (color) => <Ionicons name="home" size={24} color={color} />,
  experience: (color) => <MaterialIcons name="work" size={24} color={color} />,
  skills: (color) => <FontAwesome5 name="tools" size={20} color={color} />,
  projects: (color) => <Ionicons name="code-slash" size={22} color={color} />,
  education: (color) => (
    <MaterialCommunityIcons name="school" size={22} color={color} />
  ),
  profile: (color) => (
    <Ionicons name="person-circle" size={24} color={color} />
  ),
};

// Label map for each route
const labelsMap = {
  index: "Home",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  education: "Education",
  profile: "Profile",
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ state, descriptors, navigation }) => (
        <View className="flex-row bg-white mb-14 h-16 border-t border-gray-200 justify-around items-center">
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const routeName = route.name;

            // Safe fallback if icon/label not found
            const IconComponent = iconsMap[routeName];
            const label = labelsMap[routeName] || routeName;

            const onPress = () => {
              if (!isFocused) {
                navigation.navigate(routeName);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                className="items-center"
              >
                {IconComponent && IconComponent(isFocused ? "#6B21A8" : "gray")}
                {isFocused && (
                  <Text className="text-xs text-purple-800 mt-1">{label}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    >
      {/* Declare all screen names here to ensure correct order */}
      <Tabs.Screen name="index" />
      <Tabs.Screen name="experience" />
      <Tabs.Screen name="skills" />
      <Tabs.Screen name="projects" />
      <Tabs.Screen name="education" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
