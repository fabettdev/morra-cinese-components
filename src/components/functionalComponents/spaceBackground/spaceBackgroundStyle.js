import { StyleSheet, Platform } from "react-native";

const spaceBackgroundStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: Platform.OS === "web" ? "100vw" : "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default spaceBackgroundStyle;
