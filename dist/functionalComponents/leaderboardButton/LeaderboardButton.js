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
  var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
    width = _useWindowDimensions.width;
  var textTitleSize = _reactNative.Platform.OS === "web" ? width > 768 ? 40 : 20 : 20;
  var wrapperTop = _reactNative.Platform.OS === "web" ? width > 768 ? 20 : 10 : _reactNative.Dimensions.get("window").height - 70;
  var wrapperRight = _reactNative.Platform.OS === "web" ? width > 768 ? 50 : 10 : 20;
  var imageWidth = _reactNative.Platform.OS === "web" ? width > 768 ? 120 : 50 : 60;
  var imageHeight = _reactNative.Platform.OS === "web" ? width > 768 ? 120 : 50 : 60;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_leaderboardButtonStyle.leaderboardButtonStyle.wrapper, {
      top: wrapperTop,
      right: wrapperRight
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: props.image,
    resizeMode: "contain",
    style: [_leaderboardButtonStyle.leaderboardButtonStyle.image, {
      width: imageWidth,
      height: imageHeight
    }]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, null, /*#__PURE__*/_react.default.createElement(_TextTitle.default, {
    title: "Leaderboard",
    size: textTitleSize
  })));
}
var _default = LeaderboardButton;
exports.default = _default;