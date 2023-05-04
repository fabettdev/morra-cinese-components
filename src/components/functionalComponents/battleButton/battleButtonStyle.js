import { StyleSheet, Platform } from "react-native";

export const battleButtonStyle = StyleSheet.create({
    button: {
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    battleButton: {
        backgroundColor: "#D9007D",
        shadowColor: "#471527",
        shadowOffset: { width: 0, height: 12 },
    },
    waitingButton: {
        borderColor: "#271D4F",
        borderWidth: 10,
        backgroundColor: "transparent",
    },
    label: {
        textAlign: "center",
        fontFamily: Platform.OS === "web" ? "Poor Story" : null,
        color: "white",
        textTransform: "uppercase",
    },
});
