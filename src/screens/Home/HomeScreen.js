import React, { useEffect, useState } from "react";
import Colors from "../../../assets/constants/Colors";
import Axios from "axios";
import { API_URL } from "../../../assets/constants/API";

import PostCard from "./PostCard";
import AsyncStorage from "@react-native-community/async-storage";
import { View, SafeAreaView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { H1 } from "native-base";

export default ({ navigation }) => {
  const [postList, setPostList] = useState([]);
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
        Axios.get(`${API_URL}/restaurants`)
          .then((res) => {
            console.log(res.data);
            setPostList(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Navbar = (props) => {
    return (
      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
          paddingVertical: 6,
        }}
      >
        <H1 style={{ color: "white" }}>Hi, {userSelector.username}</H1>
      </View>
    );
  };

  const renderPosts = ({ item }) => {
    return <PostCard navigation={navigation} data={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <Navbar navigation={navigation} />
      <FlatList
        ListHeaderComponentStyle={{ marginHorizontal: 15 }}
        contentContainerStyle={{ marginTop: 46 }}
        data={postList}
        renderItem={renderPosts}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
