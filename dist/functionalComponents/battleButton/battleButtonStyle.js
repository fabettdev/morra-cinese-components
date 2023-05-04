"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.battleButtonStyle = void 0;
var _reactNative = require("react-native");
var battleButtonStyle = _reactNative.StyleSheet.create({
  button: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  battleButton: {
    backgroundColor: "#D9007D",
    shadowColor: "#471527",
    shadowOffset: {
      width: 0,
      height: 12
    }
  },
  waitingButton: {
    borderColor: "#271D4F",
    borderWidth: 10,
    backgroundColor: "transparent"
  },
  label: {
    textAlign: "center",
    fontFamily: _reactNative.Platform.OS === "web" ? "Poor Story" : null,
    color: "white",
    textTransform: "uppercase"
  }
});
exports.battleButtonStyle = battleButtonStyle;