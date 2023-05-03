import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native-web";

const spaceBackgroundStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === "web" ? "100vh" : "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default spaceBackgroundStyle;
