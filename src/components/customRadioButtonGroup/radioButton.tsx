import React from "react";
import { View, ColorValue, StyleSheet } from "react-native";
import { black } from "../../styles/themes/colors";

const DEFAULT_SIZE = 24;

interface RadioButtonProps {
  testID?: string;
  selected?: boolean;
  fillColor?: ColorValue;
  size?: number;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  testID = "radio-button",
  selected,
  fillColor,
  size = DEFAULT_SIZE,
}) => (
  <View
    testID={testID}
    style={[
      styles.radioButtonContainer,
      {
        height: size,
        width: size,
        borderRadius: size / 2,
        borderColor: selected ? fillColor : black,
      },
    ]}
  >
    {selected && (
      <View
        style={{
          height: size / 2,
          width: size / 2,
          borderRadius: size,
          backgroundColor: fillColor,
        }}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  radioButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
});

export default RadioButton;
