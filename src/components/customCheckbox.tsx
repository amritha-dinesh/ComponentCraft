import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ColorValue,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";

const DEFAULT_SIZE = 23;
const DEFAULT_SPACE = 10;

interface CustomCheckBoxProps {
  label?: string;
  value?: boolean;
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
  label = "label",
  value = false,
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
    <View
      style={[
        styles.container,
        { flexDirection: position == "left" ? "row" : "row-reverse" },
      ]}
    >
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          setChecked(!checked);
        }}
      >
        <Image
          source={
            checked
              ? checkedImage || require("../assets/checked.png")
              : unCheckedImage || require("../assets/un_checked.png")
          }
          style={{ width: size, height: size }}
        ></Image>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomCheckBox;
