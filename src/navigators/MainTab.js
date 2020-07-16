import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import HomeStack from "./HomeStack";
import Colors from "../../assets/constants/Colors";
import { Icon } from "native-base";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        style: {
          backgroundColor: "#20242F",
          borderTopWidth: 0,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type="Entypo" name="home" style={{ color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon type="FontAwesome5" name="user" style={{ color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
