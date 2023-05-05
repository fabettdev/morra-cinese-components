// React
import React, { useState, useEffect } from "react";
// Style
import "./fightinhIconStyle";
// React Native
import { View, Image } from "react-native";
import { fightingIconStyle } from "./fightinhIconStyle";

function FightingIcon(props) {
  const rotateStart = props.direction === "right" ? 45 : 270;
  const rotateEnd = props.direction === "right" ? 90 : 315;
  const translateStart = props.direction === "right" ? -45 : 0;
  const translateEnd = props.direction === "right" ? 0 : 45;

  const [state, setState] = useState({
    count: 0,
    isReturning: false,
    rotate: props.direction === "right" ? 45 : 315,
    translate: props.direction === "right" ? -45 : 45,
  });

  if (props.direction === "right") console.log(state.count);

  useEffect(() => {
    if (state.count === 3) return;

    const interval = setInterval(function () {
      setState((prevState) => {
        let isReturning = prevState.isReturning;
        let rotate = null;
        let translate = null;
        let count = prevState.count;

        if (
          prevState.rotate === rotateEnd &&
          prevState.translate === translateEnd
        ) {
          isReturning = true;
          if (props.direction === "right") {
            count += 1;
          }
        }

        if (!props.direction) {
          if (
            prevState.rotate === rotateStart &&
            prevState.translate === translateStart
          ) {
            count += 1;
          }
        }

        if (
          prevState.rotate === rotateStart &&
          prevState.translate === translateStart
        ) {
          if (prevState.count === 3) return { prevState };
          isReturning = false;
        }

        if (isReturning) {
          rotate = prevState.rotate - 3;
          translate = prevState.translate - 3;
        } else {
          rotate = prevState.rotate + 3;
          translate = prevState.translate + 3;
        }

        return {
          ...prevState,
          count,
          isReturning,
          rotate,
          translate,
        };
      });
    }, props.speed);

    return () => clearInterval(interval);
  }, [state]);

  return (
    <View
      style={[
        fightingIconStyle.container,
        {
          width: props.containerDimensions,
          height: props.containerDimensions,
          gap: props.gap,
        },
      ]}
    >
      <Image
        source={props.moveHand}
        style={{
          width: props.handDimensions,
          height: props.handDimensions,
          transform: [
            { rotate: `${state.rotate}deg` },
            { translateX: state.translate },
            { scaleX: props.direction === "right" ? 1 : -1 },
          ],
        }}
      />
      <Image
        source={props.baseHand}
        style={{
          width: props.handDimensions,
          height: props.handDimensions,
        }}
      />
    </View>
  );
}

export default FightingIcon;
