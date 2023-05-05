"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fightingIconStyle = void 0;
var _reactNative = require("react-native");
var fightingIconStyle = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 150,
    backgroundColor: "#271D4F",
    position: "relative"
  },
  topHand: {
    position: "absolute",
    left: 40,
    bottom: 50
  },
  bottomHand: {
    position: "absolute",
    left: 40,
    bottom: 0
  }
});
exports.fightingIconStyle = fightingIconStyle;