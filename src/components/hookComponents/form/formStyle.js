import { StyleSheet, Platform } from "react-native";

export const formStyle = StyleSheet.create({
  input: {
    fontFamily: Platform.OS === "web" ? "Poor Story" : null,
    borderBottomColor: "white",
    fontSize: Platform.OS === "web" ? 24 : 20,
    borderBottomWidth: 2,
    color: "#FFAA43",
    marginBottom: Platform.OS === "web" ? 100 : 40,
  },
});
