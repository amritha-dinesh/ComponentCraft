import React from "react";
import { View, ColorValue, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

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
}) => {
  const { colors } = useTheme();

  return (
    <View
      testID={testID}
      style={[
        styles.radioButtonContainer,
        {
          height: size,
          width: size,
          borderRadius: size / 2,
          borderColor: selected ? fillColor : colors.background,
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
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
});

export default RadioButton;
