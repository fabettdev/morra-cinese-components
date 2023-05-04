"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formStyle = void 0;
var _reactNative = require("react-native");
var formStyle = _reactNative.StyleSheet.create({
  input: {
    fontFamily: _reactNative.Platform.OS === "web" ? "Poor Story" : null,
    borderBottomColor: "white",
    fontSize: _reactNative.Platform.OS === "web" ? 24 : 20,
    borderBottomWidth: 2,
    color: "#FFAA43",
    marginBottom: _reactNative.Platform.OS === "web" ? 100 : 40
  }
});
exports.formStyle = formStyle;