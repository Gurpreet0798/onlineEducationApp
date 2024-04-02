import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Course")}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/conference.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Student")}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/phone-office.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    paddingTop: 20,
    paddingBottom: 10,
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
