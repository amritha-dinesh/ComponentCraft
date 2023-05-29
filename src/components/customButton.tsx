import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ButtonMode, getButtonColors } from "./utils";

interface buttonProps {
  mode?: ButtonMode;
  color?: string;
  buttonColor?: string;
  buttonTitle?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
  textColor?: string;
}
const CustomButton: React.FC<buttonProps> = ({
  disabled,
  mode = "text",
  color,
  buttonTitle,
  accessibilityLabel,
  accessibilityHint,
  testID = "button",
  buttonColor,
}) => {
  const { backgroundColor, borderColor, textColor, borderWidth, borderRadius } =
    getButtonColors({
      mode,
      buttonColor,
      color,
      disabled,
    });

  return (
    <View style={styles.contentStyle}>
      <TouchableOpacity
        onPress={() => console.log("enter here")}
        style={[
          {
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius,
          },
        ]}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        disabled={disabled}
      >
        <Text
          testID={`${testID}-text`}
          style={[styles.buttonTextStyle, { color: textColor }]}
        >
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  contentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextStyle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
