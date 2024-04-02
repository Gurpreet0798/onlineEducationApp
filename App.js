import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import courseDetails from "./src/screens/courseDetails";
import UserData from "./src/screens/UserData";
import {
  useFonts,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import {WorkSans_400Regular} from "@expo-google-fonts/work-sans";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    Nunito_600SemiBold,
    Nunito_700Bold,
    WorkSans_400Regular
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/*Home Screen*/}
        {/*<Stack.Screen name="Home" component={Home} />*/}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} channelName={"Online Education App"} />}
        </Stack.Screen>

        {/*Course Screen*/}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />

        {/*Contact Screen*/}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/*About Screen*/}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/*UserData Screen*/}
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
