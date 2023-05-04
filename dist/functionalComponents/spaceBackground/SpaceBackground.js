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

function SpaceBackground(props) {
  var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
    height = _useWindowDimensions.height;
  var imageBackgroundHeight = _reactNative.Platform.OS === "web" ? height > 768 ? "100vh" : _reactNative.Dimensions.get("window").height : "100%";
  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: props.bgImage,
    style: [_spaceBackgroundStyle.default.container, {
      height: imageBackgroundHeight
    }]
  }, props.children);
}
var _default = SpaceBackground;
exports.default = _default;