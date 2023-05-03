"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textTitleStyle = void 0;
var _reactNative = require("react-native");
var textTitleStyle = _reactNative.StyleSheet.create({
  title: {
    fontFamily: _reactNative.Platform.OS === "web" ? "Poor Story" : null,
    color: "#FFAA43"
  }
});
exports.textTitleStyle = textTitleStyle;