import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "../screens/Auth/LoginScreen";
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch, useSelector } from "react-redux";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

export default () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  useEffect(() => {
    AsyncStorage.getItem("userData")
      .then((storageItem) => {
        if (!storageItem) throw "Item is empty";
        dispatch({
          type: "USER_LOGIN",
          payload: JSON.parse(storageItem),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userSelector.username ? (
          <Stack.Screen name="Main Tab" component={MainTab} />
        ) : (
          <Stack.Screen name="Auth" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
