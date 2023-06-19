import React from "react";
import { View, ColorValue } from "react-native";
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
    style={{
      height: size,
      width: size,
      borderRadius: size / 2,
      borderWidth: 2,
      borderColor: selected ? fillColor : black,
      alignItems: "center",
      justifyContent: "center",
    }}
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

export default RadioButton;
