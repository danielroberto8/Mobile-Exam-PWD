import React from "react";
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
