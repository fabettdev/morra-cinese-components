// React
import React from "react";

// React Native
import { ImageBackground, Text } from "react-native-web";

// Style
import battleBoardStyle from "./BattleBoardStyle";

function BattleBoard(props) {
  return (
    <ImageBackground
      source={props.image}
      style={[
        {
          width: props.width,
          height: props.height,
        },
        battleBoardStyle.wrapper,
      ]}
      resizeMode="contain"
    >
      <Text
        style={[
          {
            fontSize: props.fontSize,
          },
          battleBoardStyle.text,
        ]}
      >
        {props.username}
      </Text>
      {props.children}
    </ImageBackground>
  );
}

export default BattleBoard;
