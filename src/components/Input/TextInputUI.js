import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    paddingVertical: 11,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  bg: {
    backgroundColor: "white",
    opacity: 0.2,
    ...StyleSheet.absoluteFillObject,
    borderRadius: 22,
  },
  textInput: {
    fontSize: 17,
    lineHeight: 19,
    color: "white",
  },
});

export default ({
  onChangeText,
  containerStyle,
  placeholder,
  value,
  keyboardType,
  autoCapitalize,
  secureTextEntry,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      <View
        style={{
          ...styles.bg,
        }}
      />
      <TextInput
        style={{
          ...styles.textInput,
        }}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="lightgrey"
        value={value}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
