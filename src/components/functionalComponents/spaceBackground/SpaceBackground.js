// React
import React from "react";

// React Native
import { View, ImageBackground, Text } from "react-native";

// Styles
import spaceBackgroundStyle from "./spaceBackgroundStyle";

// Images
const spaceBg = require("../../../assets/images/welcome/background.png");

function SpaceBackground(props) {
  return (
    <ImageBackground source={spaceBg} style={spaceBackgroundStyle.container}>
      {props.children}
    </ImageBackground>
  );
}

export default SpaceBackground;
