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
    left: 0,
    top: 0,
    width: "100%",
    textAlign: "center",
  },
});

export default battleBoardStyle;
