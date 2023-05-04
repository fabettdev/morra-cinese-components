"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
// React Native

var battleBoardStyle = _reactNative.StyleSheet.create({
  wrapper: {
    position: "relative",
    flexDirection: "row",
    gap: _reactNative.Platform.OS === "web" ? 20 : 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    textAlign: "center"
  }
});
var _default = battleBoardStyle;
exports.default = _default;