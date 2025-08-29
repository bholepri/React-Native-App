import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const SkillSection = ({ title, skills }) => {
  return (
    <View className="mb-6 px-6 py-5 bg-white/80 border border-purple-200 rounded-2xl shadow-md">
      <Text className="text-base font-bold text-purple-800 mb-4">{title}</Text>

      <View className="flex-row flex-wrap justify-between">
        {skills.map((skill, index) => (
          <View key={index} className="w-[48%] mb-3 flex-row items-center">
            <Feather name="check-circle" size={18} color="#7C3AED"  />
            <Text className="ml-4 text-base text-gray-700">{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const skills = () => {
  return (
    <ScrollView className="flex-1 bg-purple-200 px-4 pt-10 mt-8">
      <Text className="text-center text-2xl font-extrabold text-purple-800 mb-6">
        My Skills
      </Text>

      
      <SkillSection
        title="Front-End"
        skills={["React.js","React-native", "HTML","TailwindCSS"]}
      />
      <SkillSection
        title="Back-End"
        skills={["Node.js", "Express.js"]}
      />
      <SkillSection title="Database" skills={["MongoDB", "MySQL"]} />
      <SkillSection
        title="Programming Languages"
        skills={["JavaScript", "Core Java"]}
      />
      <SkillSection
        title="Tools"
        skills={["Git", "GitHub", "Postman", "Render", "VS Code"]}
      />
      <SkillSection
        title="DSA"
        skills={["Data Structures and Algorithms"]}
      />
    </ScrollView>
  );
};

export default skills;
