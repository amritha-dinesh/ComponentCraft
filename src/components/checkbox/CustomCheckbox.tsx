import React, { useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  ColorValue,
  ImageSourcePropType,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const DEFAULT_SIZE = 23;
const DEFAULT_SPACE = 10;

interface CustomCheckBoxProps {
  testID?: string;
  label?: string;
  value?: boolean;
  onValueChanged?: (value: boolean) => void;
  disabled?: boolean;
  labelColor?: ColorValue;
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
  onValueChanged = () => {},
  disabled = false,
  labelColor = "black",
  disabledColor = "grey",
  labelFontSize,
  spaceBetweenLabelAndCheckBox = DEFAULT_SPACE,
  checkedImage,
  unCheckedImage,
  size = DEFAULT_SIZE,
  labelFontFamily,
  position = "left",
}) => {
  const [checked, setChecked] = useState(value);

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
      >
        <Image
          source={
            checked
              ? checkedImage || require("../../assets/checked.png")
              : unCheckedImage || require("../../assets/un_checked.png")
          }
          style={{ width: size, height: size }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: disabled ? disabledColor : labelColor,
          fontSize: labelFontSize,
          marginHorizontal: spaceBetweenLabelAndCheckBox,
          fontFamily: labelFontFamily,
        }}
      >
        {label}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default CustomCheckBox;
