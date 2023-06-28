/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  ColorValue,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { green500, grey500 } from "../../styles/themes/colors";
import RadioButton from "./radioButton";

const DEFAULT_SPACE = 10;

interface RadioButtonGroupProps {
  testID?: string;
  options: Option[];
  onSubmit?: (selectedOption: Option | null) => void;
  disabled?: boolean;
  labelColor?: ColorValue;
  fillColor?: ColorValue;
  disabledColor?: ColorValue;
  labelFontSize?: number;
  spaceBetweenLabelAndRadioButton?: number;
  labelFontFamily?: string | undefined;
  position?: "left" | "right";
  size?: number;
}

export interface Option {
  label: string;
  value: string;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  testID = "radio-button-group",
  options,
  onSubmit = (option: Option) => {
    console.log(option);
  },
  labelFontSize,
  disabled = false,
  labelColor,
  disabledColor = grey500,
  labelFontFamily,
  position = "right",
  fillColor = green500,
  spaceBetweenLabelAndRadioButton = DEFAULT_SPACE,
  size,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSubmit(option);
  };
  const { colors } = useTheme();
  labelColor = labelColor ? labelColor : colors.background;

  return (
    <SafeAreaView testID={testID} style={styles.mainContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.radioButtonItemContainer,
            {
              flexDirection: position === "left" ? "row" : "row-reverse",
              justifyContent:
                position === "left" ? "flex-start" : "space-between",
            },
          ]}
          onPress={() => handleSelect(option)}
          disabled={disabled}
        >
          <RadioButton
            selected={selectedOption === option}
            fillColor={fillColor}
            size={size}
          />
          <Text
            style={{
              color: disabled ? disabledColor : labelColor,
              fontSize: labelFontSize,
              fontFamily: labelFontFamily,
              marginLeft:
                position === "left" ? spaceBetweenLabelAndRadioButton : 0,
              marginRight:
                position === "left" ? 0 : spaceBetweenLabelAndRadioButton,
            }}
          >
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "flex-start",
  },
  radioButtonItemContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
});

export default RadioButtonGroup;
