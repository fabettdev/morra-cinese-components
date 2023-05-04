"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _battleButtonStyle = require("./battleButtonStyle");
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// React

// Style

// React Native

function BattleButton(props) {
  var label = props.buttonType === "battle" ? "start battle" : "vs";
  var buttonStyle = props.buttonType === "battle" ? _battleButtonStyle.battleButtonStyle.battleButton : _battleButtonStyle.battleButtonStyle.waitingButton;
  var textSize = props.buttonType === "battle" ? props.fontSize : props.fontSize * 2;
  function onPressHandler() {
    if (props.onPressButton && typeof props.onPressButton === "function") {
      props.onPressButton();
    }
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPressHandler,
    style: [_battleButtonStyle.battleButtonStyle.button, buttonStyle, {
      width: props.dimensions,
      height: props.dimensions
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_battleButtonStyle.battleButtonStyle.label, {
      fontSize: textSize
    }]
  }, label));
}
var _default = BattleButton;
exports.default = _default;