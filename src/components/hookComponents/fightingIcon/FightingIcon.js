// React
import React, { useState, useEffect } from "react";
// Style
import "./fightinhIconStyle";
// React Native
import { View, Image, Platform } from "react-native";
import { fightingIconStyle } from "./fightinhIconStyle";

function FightingIcon(props) {
    const rotateStart = props.direction === "right" ? 45 : 270;
    const rotateEnd = props.direction === "right" ? 90 : 315;
    const translateStart = props.direction === "right" ? -45 : 0;
    const translateEnd = props.direction === "right" ? 0 : 45;

    const [state, setState] = useState({
        isChoosing: true,
        count: 0,
        isReturning: false,
        rotate: props.direction === "right" ? 45 : 315,
        translate: props.direction === "right" ? -45 : 45,
    });

    if (props.direction === "right") console.log(state.count);

    useEffect(() => {
        if (state.count === 3) return setIsNotChoosing();

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

    function setIsNotChoosing() {
        setState({
            ...state,
            isChoosing: false,
        })
    }

    return (
        <View
            style={[
                fightingIconStyle.container,
                {
                    width: props.containerDimensions,
                    height: props.containerDimensions,
                    gap: props.gap || 0,
                },
            ]}
        >

            {!!state.isChoosing ?
                <>
                    <Image
                        source={props.moveHand}
                        style={[
                            {
                                width: props.handDimensions,
                                height: props.handDimensions,
                                transform: [
                                    { rotate: `${state.rotate}deg` },
                                    { translateX: state.translate },
                                    { scaleX: props.direction === "right" ? 1 : -1 },
                                ],
                            },
                            Platform.OS === "web" && {
                                position: "absolute",
                                left: (props.containerDimensions - props.handDimensions) / 2,
                                bottom: 50,
                            },
                        ]}
                    />
                    <Image
                        source={props.baseHand}
                        style={[
                            {
                                width: props.handDimensions,
                                height: props.handDimensions,
                            },
                            Platform.OS === "web" && {
                                position: "absolute",
                                left: (props.containerDimensions - props.handDimensions) / 2,
                                bottom: 0,
                            },
                        ]}
                    />
                </>
                :
                <Image
                    source={props.choosenHand}
                    style={[
                        {
                            width: props.choosendHandDimensions,
                            height: props.choosendHandDimensions,
                        },
                    ]}
                />
            }
        </View>
    );
}

export default FightingIcon;
