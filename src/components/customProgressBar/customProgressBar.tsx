import React from "react";
import { View, StyleSheet, ColorValue, SafeAreaView } from "react-native";
import { green800, lightGreen100 } from "../../styles/themes/colors";

interface CustomProgressBarProps {
  testID?: string;
  progress: number;
  barColor?: ColorValue;
  backgroundColor?: ColorValue;
  borderRadius?: number;
  width?: any;
  height?: any;
}

const DEFAULT_HEIGHT = 10;
const DEFAULT_WIDTH = "100%";
const DEFAULT_RADIUS = 5;

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({
  testID = "custom-progress-bar",
  progress,
  barColor = green800,
  backgroundColor = lightGreen100,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  borderRadius = DEFAULT_RADIUS,
}) => (
  <SafeAreaView>
    <View
      testID={testID}
      style={[
        styles.container,
        { backgroundColor, width, height, borderRadius },
      ]}
    >
      <View
        style={[
          styles.bar,
          { width: `${progress}%`, backgroundColor: barColor },
        ]}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  bar: {
    height: "100%",
  },
});

export default CustomProgressBar;
