import React from "react";
import { View, StyleSheet, ColorValue, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";

interface CustomProgressBarProps {
  testID?: string;
  progress: number;
  barColor?: ColorValue;
  backgroundColor?: ColorValue;
  borderRadius?: number;
  width?: string | number;
  height?: string | number;
}

const DEFAULT_HEIGHT = 10;
const DEFAULT_WIDTH = "100%";
const DEFAULT_RADIUS = 5;

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({
  testID = "custom-progress-bar",
  progress,
  barColor,
  backgroundColor,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  borderRadius = DEFAULT_RADIUS,
}) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <View
        testID={testID}
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : colors.background,
            width,
            height,
            borderRadius,
          },
        ]}
      >
        <View
          style={[
            styles.bar,
            {
              width: `${progress}%`,
              backgroundColor: barColor ? barColor : colors.text,
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  bar: {
    height: "100%",
  },
});

export default CustomProgressBar;
