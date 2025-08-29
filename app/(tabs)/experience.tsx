import React from "react";
import { Text, View } from "react-native";

const experience = () => {
  return (
    <View className="flex-1 bg-purple-200 p-8 mt-10">
      <Text className="text-center text-2xl font-bold text-purple-800 mb-6">
        My Experience
      </Text>

      {/* Mahadev Softwares */}
      <View className="mb-6 mt-10 p-4 border border-gray-300 rounded-xl bg-gray-50 shadow-sm">
  <View className="mb-2 flex-row justify-between items-center">
    <Text className="text-xl font-semibold text-purple-900">
      Mahadev Softwares
    </Text>
    <Text className="text-sm text-gray-600">July 2025 - Present</Text>
  </View>

  <Text className="text-base font-medium text-black mb-2">
    Full Stack Developer
  </Text>

  <View className="space-y-1 pl-3">
    <Text className="text-sm text-gray-700">
      • Developed scalable backend APIs with Node.js
    </Text>
    <Text className="text-sm text-gray-700">
      • Created Responsive UI using React, TailwindCSS
    </Text>
    <Text className="text-sm text-gray-700">
      • Handled CRUD operations using Mongoose
    </Text>
  </View>
</View>


      {/* Vtex.AI */}
      <View className="mb-6 p-4 border border-gray-300 rounded-xl bg-gray-50 shadow-sm">
  <View className="mb-2 flex-row justify-between items-center">
    <Text className="text-xl font-semibold text-purple-900">Vtex.AI</Text>
    <Text className="text-sm text-gray-600">May 2025 - June 2025</Text>
  </View>

  <Text className="text-base font-medium text-black mb-2">
    Full Stack Intern
  </Text>

  <View className="space-y-1 pl-3">
    <Text className="text-sm text-gray-700">
      • Managed backend logic and integration in Node.js
    </Text>
    <Text className="text-sm text-gray-700">
      • Created and Managed MongoDB collections
    </Text>
    <Text className="text-sm text-gray-700">
      • Developed backend APIs with Node.js, MongoDB
    </Text>
  </View>
</View>

    </View>
  );
};

export default experience;
