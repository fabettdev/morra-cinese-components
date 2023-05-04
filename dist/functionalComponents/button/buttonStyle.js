"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonStyle = void 0;
var _reactNative = require("react-native");
var buttonStyle = _reactNative.StyleSheet.create({
  button: {
    backgroundColor: "#D9007D",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: "#471527",
    shadowOffset: {
      width: 0,
      height: 7
    }
  },
  label: {
    textAlign: "center",
    fontFamily: _reactNative.Platform.OS === "web" ? "Poor Story" : null,
    fontSize: _reactNative.Platform.OS === "web" ? 28 : 18,
    color: "white",
    textTransform: "uppercase"
  }
});
exports.buttonStyle = buttonStyle;