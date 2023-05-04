"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _BattleBoardStyle = _interopRequireDefault(require("./BattleBoardStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// React

// React Native

// Style

function BattleBoard(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: props.image,
    style: [{
      width: props.width,
      height: props.height
    }, _BattleBoardStyle.default.wrapper],
    resizeMode: "contain"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [{
      fontSize: props.fontSize
    }, _BattleBoardStyle.default.text]
  }, props.username), props.children);
}
var _default = BattleBoard;
exports.default = _default;