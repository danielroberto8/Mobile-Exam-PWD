import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import PostDetailScreen from "../screens/Home/PostDetailScreen";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={PostDetailScreen} name="HomePostDetail" />
    </Stack.Navigator>
  );
};
