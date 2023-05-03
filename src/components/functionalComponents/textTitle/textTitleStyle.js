import { StyleSheet, Platform } from "react-native";

export const textTitleStyle = StyleSheet.create({
  title: {
    fontFamily: Platform.OS === "web" ? "Poor Story" : null,
    color: "#FFAA43",
  },
});
