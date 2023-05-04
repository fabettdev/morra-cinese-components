// React
import React from "react";
// React Native
import { View, Image, TouchableOpacity, Platform, useWindowDimensions, Platform, Dimensions } from "react-native";
// Components
import TextTitle from "../textTitle/TextTitle";
// Style
import { leaderboardButtonStyle } from "./leaderboardButtonStyle";

function LeaderboardButton(props) {
  const { width } = useWindowDimensions();

  const textTitleSize = Platform.OS === "web" ? (width > 768 ? 40 : 20) : 20;
  const wrapperTop = Platform.OS === "web" ? (width > 768 ? 20 : 10) : Dimensions.get("window").height - 70;
  const wrapperRight = Platform.OS === "web" ? (width > 768 ? 50 : 10) : 20;
  const imageWidth = Platform.OS === "web" ? (width > 768 ? 120 : 50) : 60;
  const imageHeight = Platform.OS === "web" ? (width > 768 ? 120 : 50) : 60;

  return (
    <View style={[leaderboardButtonStyle.wrapper, { top: wrapperTop, right: wrapperRight }]}>
      <Image
        source={props.image}
        resizeMode="contain"
        style={[leaderboardButtonStyle.image, { width: imageWidth, height: imageHeight }]}
      />
      <TouchableOpacity>
        <TextTitle title="Leaderboard" size={textTitleSize} />
      </TouchableOpacity>
    </View>
  );
}

export default LeaderboardButton;
