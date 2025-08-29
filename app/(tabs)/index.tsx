import { Image, ScrollView, Text, View } from "react-native";
import image from "../../assets/images/my-photo.png";

export default function Index() {
  return (
    <View className="flex-1 bg-purple-200">
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
      >
        <Text className="mt-16 text-center font-semibold text-2xl">
          Welcome to my Portfolio!!!
        </Text>

        <View className="mt-12 px-6">
          <Text className="text-xl text-center">Hello, My name is</Text>
          <Text className="font-semibold text-purple-900 text-4xl">
            Priyanka Bhole
          </Text>
        </View>

        <Image
          source={image}
          className="mt-12"
          style={{ width: 200, height: 200, marginTop: 20, borderRadius: 100 }}
        />
        <View className="mt-6 px-6">
          <Text className="text-xl text-center">I am </Text>
          <Text className="font-semibold text-purple-900 text-3xl text-center">
            Full Stack Developer
          </Text>
          <Text className="mt-8  text-center">
            Experienced in building scalable web applications, implementing secure <Text className="font-bold">Authentication</Text>, and handling <Text className="font-bold">Database</Text> management. Adept at working in a team-oriented environment with a strong foundation in <Text className="font-bold">Frontend</Text> and <Text className="font-bold">Backend</Text> technologies
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
