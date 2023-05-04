// React Native
import { StyleSheet, Platform } from "react-native";

const battleBoardStyle = StyleSheet.create({
  wrapper: {
    position: "relative",
    flexDirection: "row",
    gap: Platform.OS === "web" ? 20 : 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    position: "absolute",
    left: Platform.OS === "web" ? "40%" : "40%",
    top: Platform.OS === "web" ? "9%" : "9%",
  },
});

export default battleBoardStyle;
