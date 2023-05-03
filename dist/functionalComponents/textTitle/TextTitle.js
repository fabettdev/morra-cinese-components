"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _textTitleStyle = require("./textTitleStyle");
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// React

// Style

// Native

function TextTitle(props) {
  var _props$size;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_textTitleStyle.textTitleStyle.title, {
      fontSize: (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 72
    }]
  }, props.title));
}
var _default = TextTitle;
exports.default = _default;