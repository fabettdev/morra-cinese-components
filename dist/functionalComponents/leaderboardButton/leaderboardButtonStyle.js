"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leaderboardButtonStyle = void 0;
var _reactNative = require("react-native");
var leaderboardButtonStyle = _reactNative.StyleSheet.create({
  wrapper: {
    position: _reactNative.Platform.OS === "web" ? "fixed" : "absolute",
    flexDirection: "row",
    alignItems: "center"
  }
});
exports.leaderboardButtonStyle = leaderboardButtonStyle;