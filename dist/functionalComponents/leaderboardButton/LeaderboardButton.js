"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _TextTitle = _interopRequireDefault(require("../textTitle/TextTitle"));
var _leaderboardButtonStyle = require("./leaderboardButtonStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// React

// React Native

// Components

// Style

function LeaderboardButton(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _leaderboardButtonStyle.leaderboardButtonStyle.wrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: props.image,
    resizeMode: "contain",
    style: _leaderboardButtonStyle.leaderboardButtonStyle.image
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, null, /*#__PURE__*/_react.default.createElement(_TextTitle.default, {
    title: "Leaderboard",
    size: _reactNative.Platform.OS === "web" ? 40 : 20
  })));
}
var _default = LeaderboardButton;
exports.default = _default;