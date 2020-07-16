import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Colors from "../../../assets/constants/Colors";
import AsyncStorage from "@react-native-community/async-storage";
import TextUI from "../../components/Text/TextUI";
import { H1 } from "native-base";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});

export default () => {
  const userSelector = useSelector((state) => state.user);

  const logoutHandler = () => {
    AsyncStorage.removeItem("userData")
      .then((res) => {
        dispatch({
          type: "USER_LOGOUT",
        });
        console.log("LOGOUT!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{ ...styles.container }}>
      <H1 style={{ color: Colors.primaryColor }}>
        Hi, {userSelector.username}
      </H1>
      <View style={{ marginTop: 10 }}></View>
      <Button type="secondary" size="md" onPress={logoutHandler}>
        LOGOUT
      </Button>
    </View>
  );
};
