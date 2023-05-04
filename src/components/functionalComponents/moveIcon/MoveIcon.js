// React
import React from "react";

// React Native
import { Image, TouchableOpacity } from "react-native";

// Styles
import moveIconStyle from "./MoveIconStyle";

function MoveIcon(props) {
  return (
    <TouchableOpacity
      style={moveIconStyle.wrapper}
      onPress={() => {
        console.log("Pressed move: ", props.selectedMove);
        props.selectUserMove(props.selectedMove);
      }}
    >
      <Image
        source={props.image}
        style={[
          {
            backgroundColor:
              props.selectedMove === props.userMove ? "#271D4F" : null,
            width: props.size,
            height: props.size,
          },
          moveIconStyle.moveImage,
        ]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

export default MoveIcon;
