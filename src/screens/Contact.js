import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = (navigation) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Plzz fill all the fields");
    } else {
      Alert.alert(
        `Thank You ${name} for contacting us. I will reach you soon.`
      );
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your Knowledge</Text>
      <Text style={styles.description}>
        You can reach me anytime via gurpreetkaur07988@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={"#C5C6C7"}
          placeholder={"gurpreet"}
          value={name}
          onChangeText={(userData) => setName(userData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={"#C5C6C7"}
          placeholder={"demo@gmail.com"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Mobile Number </Text>
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={"#C5C6C7"}
          placeholder={"123456789"}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> How can i help you?? </Text>
        <TextInput
          style={[styles.inputStyle, styles.multiLineStyle]}
          placeholderTextColor={"#C5C6C7"}
          placeholder={"Tell me about your self"}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/*checkBox*/}
      <View style={styles.wrapper}>
        <Checkbox
        value = {agree}
        onValueChange={() => setAgree(!agree)}
        color={ agree ? "#4630EB" : "grey"}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with all T&C.
        </Text>
      </View>

      {/*Submit Button*/}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}
      >
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 25,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0,3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  labels: {
    fontWeight: "bold",
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  multiLineStyle: { paddingVertical: 4 },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_300Light",
  },
});

export default Contact;
