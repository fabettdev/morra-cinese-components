"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _buttonStyle = require("./buttonStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//React

// Native

// Style

function Button(props) {
  function onPressHandler() {
    props.onPressButton();
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPressHandler,
    style: _buttonStyle.buttonStyle.button
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _buttonStyle.buttonStyle.label
  }, props.label));
}
var _default = Button;
exports.default = _default;