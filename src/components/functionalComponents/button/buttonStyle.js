import { StyleSheet, Platform } from "react-native";

export const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#D9007D",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: "#471527",
    shadowOffset: { width: 0, height: 7 },
  },
  label: {
    textAlign: "center",
    fontFamily: Platform.OS === "web" ? "Poor Story" : null,
    fontSize: Platform.OS === "web" ? 28 : 18,
    color: "white",
    textTransform: "uppercase",
  },
});
