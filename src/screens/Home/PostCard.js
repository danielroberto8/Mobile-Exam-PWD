import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../../assets/constants/Colors";
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";

import PlaceholderProfPic from "../../../assets/splash.png";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  likeBtn: {
    fontSize: 22,
    color: "white",
  },
});

export default ({ navigation, data }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
        marginVertical: 10,
      }}
    >
      <ImageScale
        source={{
          uri: data.image,
        }}
        style={{
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        width={width - 30}
      />
      <View style={{ paddingHorizontal: 13 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 11,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon style={{ ...styles.likeBtn }} type="AntDesign" name="star" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",
              }}
            >
              {data.rating}
            </TextUI>
          </View>
        </View>
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HomePostDetail", { postDetailData: data })
            }
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 22,
            }}
          >
            <TextUI
              style={{
                marginBottom: 4,
                fontSize: 16,
                color: Colors.primaryColor,
              }}
              bold
            >
              {data.restaurantName}
            </TextUI>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            paddingBottom: 75,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}></View>
        </View>
      </View>
    </View>
  );
};
