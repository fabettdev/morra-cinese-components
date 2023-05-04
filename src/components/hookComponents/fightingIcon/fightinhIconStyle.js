import { StyleSheet } from "react-native";

export const fightingIconStyle = StyleSheet.create({
    container: {
        borderRadius: 150,
        backgroundColor: "#271D4F",
        position: "relative",
    },
    topHand: {
        position: "absolute",
        left: 40,
        bottom: 50,
    },
    bottomHand: {
        position: "absolute",
        left: 40,
        bottom: 0
    }
});