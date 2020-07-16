import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/Button/Button";
import TextUI from "../../components/Text/TextUI";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import Colors from "../../../assets/constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    color: Colors.primaryColor,
    fontSize: 34,
    height: 34,
  },
  loginText: {
    color: Colors.primaryColor,
    marginTop: 12,
  },
});

export default (props) => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  const loginBtnHandler = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        username,
      })
    )
      .then(() => {
        dispatch({
          type: "USER_LOGIN",
          payload: username,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ justifyContent: "center", flex: 1 }}
      >
        <View style={{ ...styles.contentContainer }}>
          <TextUI style={{ ...styles.welcomeText }}>Tomato Apps</TextUI>
          <TextUI style={{ ...styles.loginText }}>Login to your account</TextUI>
          <View
            style={{
              borderRadius: 22,
              paddingVertical: 11,
              paddingHorizontal: 20,
              justifyContent: "center",
              marginTop: 58,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                opacity: 0.2,
                borderRadius: 22,
                ...StyleSheet.absoluteFillObject,
              }}
            />
            <TextInput
              autoCapitalize="none"
              placeholderTextColor="grey"
              style={{
                fontSize: 17,
                color: Colors.primaryColor,
                lineHeight: 19,
              }}
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <Button
            onPress={loginBtnHandler}
            containerStyle={{ marginTop: 40 }}
            size="lg"
          >
            Masuk
          </Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
