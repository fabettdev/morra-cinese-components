"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leaderboardButtonStyle = void 0;
var _reactNative = require("react-native");
var leaderboardButtonStyle = _reactNative.StyleSheet.create({
  wrapper: {
    position: _reactNative.Platform.OS === "web" ? "fixed" : "absolute",
    top: _reactNative.Platform.OS === "web" ? 20 : _reactNative.Dimensions.get("window").height - 70,
    right: _reactNative.Platform.OS === "web" ? 50 : 20,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: _reactNative.Platform.OS === "web" ? 120 : 60,
    height: _reactNative.Platform.OS === "web" ? 120 : 60
  }
});
exports.leaderboardButtonStyle = leaderboardButtonStyle;