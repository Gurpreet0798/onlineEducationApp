import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Menu from "../Component/Menu";
import img from "../../assets/onlineLearning.png";

const Home = (props) => {
  const description =
    "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ padding: 15, gap: 10 }}>
          <Image
            style={{
              marginTop: 100,
              height: 200,
              width: "100%",
              borderRadius: 10,
            }}
            source={img}
          />
          <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome to</Text>
          <Text
            style={{
              color: "blue",
              fontSize: 25,
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            {props.channelName}
          </Text>
          <Text style={{ paddingVertical: 2, lineHeight: 22 }}>
            {description}
          </Text>
        </View>
        <Menu />
      </ScrollView>
    </View>
  );
};

export default Home;
