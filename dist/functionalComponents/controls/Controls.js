"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// React

//React Native

function Controls(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: props.image,
    style: {
      width: props.width,
      height: props.height
    },
    resizeMode: "contain"
  });
}
var _default = Controls;
exports.default = _default;