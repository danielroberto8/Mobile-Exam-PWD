import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigators/RootNavigator";
import reducers from "./src/redux/reducers";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
