"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _spaceBackgroundStyle = _interopRequireDefault(require("./spaceBackgroundStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// React

// React Native

// Styles

// Images
var spaceBg = require("../../../assets/images/welcome/background.png");
function SpaceBackground(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: spaceBg,
    style: _spaceBackgroundStyle.default.container
  }, props.children);
}
var _default = SpaceBackground;
exports.default = _default;