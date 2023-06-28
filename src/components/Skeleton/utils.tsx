import { Animated } from "react-native";

export const generateArray = (dataCount: number) => {
  const data = [];
  for (let i = 1; i <= dataCount; i++) {
    data.push(i);
  }
  return data;
};

export const slideUpStyle = (fadeAnim: Animated.AnimatedValue) => {
  const Style = {
    opacity: fadeAnim,
    transform: [
      {
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 2],
        }),
      },
    ],
  };
  return Style;
};
export const slideDownStyle = (fadeAnim: Animated.AnimatedValue) => {
  const Style = {
    opacity: fadeAnim,
    transform: [
      {
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, 2],
        }),
      },
    ],
  };
  return Style;
};

export const slideLeftStyle = (fadeAnim: Animated.AnimatedValue) => {
  const Style = {
    opacity: fadeAnim,
    transform: [
      {
        translateX: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 2],
        }),
      },
    ],
  };
  return Style;
};

export const slideRightStyle = (fadeAnim: Animated.AnimatedValue) => {
  const Style = {
    opacity: fadeAnim,
    transform: [
      {
        translateX: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, 2],
        }),
      },
    ],
  };
  return Style;
};
