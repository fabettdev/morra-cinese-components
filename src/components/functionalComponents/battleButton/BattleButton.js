// React
import React from "react";
// Style
import { battleButtonStyle } from "./battleButtonStyle";
// React Native
import { TouchableOpacity, Text } from "react-native";

function BattleButton(props) {
    const label = props.buttonType === "battle" ? "start battle" : "vs";
    const buttonStyle = props.buttonType === "battle" ? battleButtonStyle.battleButton : battleButtonStyle.waitingButton;
    const textSize = props.buttonType === "battle" ? props.fontSize : props.fontSize * 2;

    function onPressHandler() {
        if (props.onPressButton && typeof props.onPressButton === "function") {
            props.onPressButton();
        }
    }

    return (
        <TouchableOpacity onPress={onPressHandler} style={[battleButtonStyle.button, buttonStyle, { width: props.dimensions, height: props.dimensions }]}>
            <Text style={[battleButtonStyle.label, { fontSize: textSize }]}>{label}</Text>
        </TouchableOpacity>
    );
}

export default BattleButton;