import { StatusBar } from "react-native";
import "react-native-gesture-handler";

import { Home } from "./src/screens/Home";

import { HoldMenuProvider } from "react-native-hold-menu";

import { Feather } from "@expo/vector-icons";

export default function App() {
  const insets = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  };
  return (
    <HoldMenuProvider
      theme="dark"
      safeAreaInsets={insets}
      iconComponent={Feather}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </HoldMenuProvider>
  );
}
