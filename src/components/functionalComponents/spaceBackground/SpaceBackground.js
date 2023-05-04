// React
import React from "react";
// React Native
import { ImageBackground, Platform, Dimensions, useWindowDimensions } from "react-native";
// Styles
import spaceBackgroundStyle from "./spaceBackgroundStyle";

function SpaceBackground(props) {
  const { height } = useWindowDimensions();
  const imageBackgroundHeight = Platform.OS === "web" ? (height > 768 ? "100vh" : Dimensions.get("window").height) : "100%";

  return (
    <ImageBackground
      source={props.bgImage}
      style={[spaceBackgroundStyle.container, { height: imageBackgroundHeight }]}
    >
      {props.children}
    </ImageBackground>
  );

}

export default SpaceBackground;
