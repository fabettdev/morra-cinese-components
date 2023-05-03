// React
import React from "react";

// React Native
import { ImageBackground } from "react-native";

// Styles
import spaceBackgroundStyle from "./spaceBackgroundStyle";

function SpaceBackground(props) {
  return (
    <ImageBackground
      source={props.bgImage}
      style={spaceBackgroundStyle.container}
    >
      {props.children}
    </ImageBackground>
  );
}

export default SpaceBackground;
