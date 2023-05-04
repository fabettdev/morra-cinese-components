"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var spaceBackgroundStyle = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    width: _reactNative.Platform.OS === "web" ? "100vw" : "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
var _default = spaceBackgroundStyle;
exports.default = _default;