import { StyleSheet, Platform } from "react-native";

export const leaderboardButtonStyle = StyleSheet.create({
  wrapper: {
    position: Platform.OS === "web" ? "fixed" : "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
});