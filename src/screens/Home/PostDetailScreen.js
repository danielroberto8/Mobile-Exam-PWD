import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import TextUI from "../../components/Text/TextUI";
import Colors from "../../../assets/constants/Colors";
import { Icon } from "native-base";
import Header from "../../components/General/Header";
import Image from "react-native-scalable-image";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
});

export default (props) => {
  const { postDetailData } = props.route.params;
  console.log("POST DETAIL: ", postDetailData);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />

      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ maxHeight: 540 }}
          width={width}
          source={{ uri: postDetailData.image }}
        />
        <View>
          <Header {...props} title={postDetailData.restaurantName} />
        </View>
        <View>
          <TextUI>
            Rating :{" "}
            <TextUI style={{ color: Colors.primaryColor }}>
              {postDetailData.rating}
            </TextUI>
          </TextUI>

          <TextUI>
            Address :{" "}
            <TextUI style={{ color: Colors.primaryColor }}>
              {postDetailData.address}
            </TextUI>
          </TextUI>

          <TextUI>
            Cuisines :{" "}
            <TextUI style={{ color: Colors.primaryColor }}>
              {postDetailData.cuisine}
            </TextUI>
          </TextUI>

          <TextUI>
            Open :{" "}
            <TextUI style={{ color: Colors.primaryColor }}>
              {postDetailData.openTime} AM to {postDetailData.closeTime} PM
            </TextUI>
          </TextUI>

          <TextUI>
            Cost for 2 :{" "}
            <TextUI style={{ color: Colors.primaryColor }}>
              TL {postDetailData.costfortwo}
            </TextUI>
          </TextUI>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={15}
        style={{
          paddingHorizontal: 15,
          backgroundColor: "#20242F",
          paddingVertical: 10,
        }}
      >
        <SafeAreaView />
      </KeyboardAvoidingView>
    </View>
  );
};
