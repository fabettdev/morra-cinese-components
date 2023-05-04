// React
import React from "react";

//React Native
import { Image } from "react-native";

function Controls(props) {
  return (
    <Image
      source={props.image}
      style={{ width: props.width, height: props.height }}
      resizeMode="contain"
    />
  );
}

export default Controls;
