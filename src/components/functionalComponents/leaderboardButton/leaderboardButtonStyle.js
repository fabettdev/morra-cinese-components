import { Dimensions, StyleSheet, Platform } from "react-native";

export const leaderboardButtonStyle = StyleSheet.create({
  wrapper: {
    position: Platform.OS === "web" ? "fixed" : "absolute",
    top: Platform.OS === "web" ? 20 : Dimensions.get("window").height - 70,
    right: Platform.OS === "web" ? 50 : 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: Platform.OS === "web" ? 120 : 60,
    height: Platform.OS === "web" ? 120 : 60,
  },
});
