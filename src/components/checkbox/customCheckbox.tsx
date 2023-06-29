/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  ColorValue,
  ImageSourcePropType,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { grey500 } from "../../styles/themes/colors";
import { useTheme } from "@react-navigation/native";
import { theme as defaultTheme } from "../../styles/themes";
import Text from "../CustomText/CText";

const DEFAULT_SIZE = defaultTheme.light.componentSizes.checkboxSize;

interface CustomCheckBoxProps {
  testID?: string;
  label?: string;
  value?: boolean;
  onValueChanged?: (value: boolean) => void;
  disabled?: boolean;
  labelColor?: ColorValue;
  fillColor?: ColorValue;
  disabledColor?: ColorValue;
  labelFontSize?: number;
  spaceBetweenLabelAndCheckBox?: number;
  checkedImage?: ImageSourcePropType;
  unCheckedImage?: ImageSourcePropType;
  size?: number;
  labelFontFamily?: string | undefined;
  position?: "left" | "right";
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  testID = "custom-checkbox",
  label = "label",
  value = false,
  onValueChanged = () => {
    "true";
  },
  disabled = false,
  labelColor,
  fillColor = grey500,
  disabledColor = grey500,
  labelFontSize,
  spaceBetweenLabelAndCheckBox = defaultTheme.light.spacing.xs,
  checkedImage,
  unCheckedImage,
  size = DEFAULT_SIZE,
  labelFontFamily,
  position = "left",
}) => {
  const { colors } = useTheme();
  const [checked, setChecked] = useState(value);

  labelColor = labelColor ? labelColor : colors.background;

  return (
    <SafeAreaView
      style={[
        styles.container,
        { flexDirection: position === "left" ? "row" : "row-reverse" },
      ]}
    >
      <TouchableOpacity
        testID={testID}
        disabled={disabled}
        onPress={() => {
          onValueChanged(!checked);
          setChecked(!checked);
        }}
        activeOpacity={0.8}
      >
        <Image
          source={
            checked
              ? checkedImage || require("../../assets/fillChecked.png")
              : unCheckedImage || require("../../assets/unchecked.png")
          }
          style={{
            width: size,
            height: size,
            tintColor: checkedImage
              ? ""
              : checked
              ? fillColor
              : colors.background,
          }}
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.text,
          {
            color: disabled ? disabledColor : labelColor,
            fontSize: labelFontSize,
            marginHorizontal: spaceBetweenLabelAndCheckBox,
            fontFamily: labelFontFamily,
          },
        ]}
      >
        {label}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "flex-start",
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default CustomCheckBox;
