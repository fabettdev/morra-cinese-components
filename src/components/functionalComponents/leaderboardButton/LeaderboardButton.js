// React
import React from "react";

// React Native
import { View, Image, TouchableOpacity, Platform } from "react-native";

// Components
import TextTitle from "../textTitle/TextTitle";

// Style
import { leaderboardButtonStyle } from "./leaderboardButtonStyle";

function LeaderboardButton(props) {
  return (
    <View style={leaderboardButtonStyle.wrapper}>
      <Image
        source={props.image}
        resizeMode="contain"
        style={leaderboardButtonStyle.image}
      />
      <TouchableOpacity>
        <TextTitle title="Leaderboard" size={Platform.OS === "web" ? 40 : 20} />
      </TouchableOpacity>
    </View>
  );
}

export default LeaderboardButton;
