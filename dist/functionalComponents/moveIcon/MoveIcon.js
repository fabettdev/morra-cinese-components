"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MoveIconStyle = _interopRequireDefault(require("./MoveIconStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// React

// React Native

// Styles

function MoveIcon(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: _MoveIconStyle.default.wrapper,
    onPress: function onPress() {
      console.log("Pressed move: ", props.selectedMove);
      props.selectUserMove(props.selectedMove);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: props.image,
    style: [{
      backgroundColor: props.selectedMove === props.userMove ? "#271D4F" : null,
      width: props.size,
      height: props.size
    }, _MoveIconStyle.default.moveImage],
    resizeMode: "contain"
  }));
}
var _default = MoveIcon;
exports.default = _default;