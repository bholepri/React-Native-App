import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";

const ProjectCard = ({
  title,
  description,
  tech,
  linkLabel,
  linkUrl,
  iconName,
  iconSet,
}) => {
  const [showMore, setShowMore] = useState(false);
  const shortDesc = description.split(".")[0] + ".";

  const renderIcon = () => {
    if (iconSet === "MaterialIcons") {
      return <MaterialIcons name={iconName} size={20} color="#6B21A8" />;
    } else if (iconSet === "FontAwesome5") {
      return <FontAwesome5 name={iconName} size={20} color="#6B21A8" />;
    }
    return null;
  };

  const [mainTitle, subTitle] = title.split("–").map((str) => str.trim());

  return (
    <View className="mb-6 p-8 bg-white rounded-2xl shadow-md">
      <View className="flex-row items-center mb-6">
        {renderIcon()}
        <Text className="ml-2 ms-6 text-2xl font-bold text-purple-700">
          {mainTitle}
          {"\n"}
          <Text className="text-base ms-6 text-purple-700">{subTitle}</Text>
        </Text>
      </View>

      <Text className="text-sm text-gray-700 mb-2">
        {showMore ? description : shortDesc}
      </Text>

      {description.length > shortDesc.length && (
        <Pressable onPress={() => setShowMore(!showMore)}>
          <Text className="text-xs text-blue-600 underline mb-6">
            {showMore ? "Show Less" : "Read More"}
          </Text>
        </Pressable>
      )}

      <View className="flex-row items-start mb-2">
        <FontAwesome5 name="tools" size={14} color="gray" />
        <Text className="ml-2 text-xs text-gray-600">
          <Text className="font-semibold text-black">Tech:</Text> {tech}
        </Text>
      </View>
      <View className="flex-row gap-8">
        <Text className="mt-2 mb-1 text-sm text-gray-800">
          Wanna watch my project?
        </Text>
        {linkUrl && (
          <Pressable
            onPress={() => Linking.openURL(linkUrl)}
            className="flex-row items-center"
          >
            <Feather name="external-link" size={16} color="#2563EB" />
            <Text className="ml-1 text-sm text-blue-600 underline">
              {linkLabel}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const Projects = () => {
  return (
    <ScrollView className="flex-1 bg-purple-100 p-8 mt-10">
      <Text className="text-center text-2xl font-bold text-purple-800 mb-8">
        My Projects
      </Text>

      <ProjectCard
        title="Prescripto – Doctor Appointment Booking"
        description="Built a full-stack platform with features like Appointment Booking, Cancellation, Time Slot Selection, Profile Management, Admin Panel, Doctor Availability, Payment Integration. Supports three-level login for Patients, Doctors, Admins."
        tech="HTML, CSS, JS, React.js, Node.js, Express, MongoDB, Razorpay"
        linkLabel="Live Demo"
        linkUrl="https://prescripto-frontend-e6hz.onrender.com"
        iconName="local-hospital"
        iconSet="MaterialIcons"
      />

      <ProjectCard
        title="Wanderlust – Hotel Booking System"
        description="Full-featured hotel booking site. Users can search and book hotels by location, date, price, amenities. Includes secure login, payment gateway, booking history."
        tech="HTML, CSS, JavaScript, Node.js, Express, MongoDB, Razorpay"
        linkLabel="Live Demo"
        linkUrl="https://hotel-booking-website-cmc4.onrender.com/"
        iconName="hotel"
        iconSet="FontAwesome5"
      />

      <ProjectCard
        title="On Road Assistance System"
        description="Emergency breakdown assistance app for travelers. Includes real-time service request system for vehicle help. Separate roles for users and service providers."
        tech="HTML, CSS, Bootstrap, JS, React.js, Node.js, MongoDB"
        linkLabel="GitHub"
        linkUrl="https://github.com/bholepri/On-Road-Assistance"
        iconName="two-wheeler"
        iconSet="MaterialIcons"
      />
    </ScrollView>
  );
};

export default Projects;
