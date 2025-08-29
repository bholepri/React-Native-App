import React from "react";
import { ScrollView, Text, View } from "react-native";

const EducationCard = ({ degree, year, university, institute, score }) => {
  return (
    <View className="bg-white p-6 mb-6 rounded-2xl shadow-md">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-semibold text-purple-900">{degree}</Text>
        <Text className="text-sm text-gray-600">{year}</Text>
      </View>
      <Text className="text-sm text-gray-700 mb-1">{university}</Text>
      <Text className="text-sm text-gray-700 mb-2">{institute}</Text>
      <Text className="text-sm font-medium text-gray-800">{score}</Text>
    </View>
  );
};

const Education = () => {
  return (
    <ScrollView className="flex-1 bg-purple-100 p-8 mt-10">
      <Text className="text-2xl font-bold text-center text-purple-800 mb-6">
        My Education
      </Text>

      <EducationCard
        degree="Bachelor of Technology"
        year="2021–2025"
        university="Dr. Babasaheb Ambedkar Technological University, Lonere"
        institute="Hindi Seva Mandal's Shri Sant Gadge Baba College of Engineering, Bhusawal"
        score="CGPA: 8.82"
      />

      <EducationCard
        degree="Higher Secondary Certificate"
        year="2021"
        university="Maharashtra State Board"
        institute="Dada Saheb Devidas Namdeo Bhole College, Bhusawal"
        score="Percentage: 86.00%"
      />

      <EducationCard
        degree="Secondary School Certificate"
        year="2019"
        university="Maharashtra State Board"
        institute="St. Alyosius High School, Bhusawal"
        score="Percentage: 84.60%"
      />
    </ScrollView>
  );
};

export default Education;
