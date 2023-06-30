import React from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { ButtonMode, getButtonColors } from "./utils";
import { useTheme } from "@react-navigation/native";
import Text from "../CustomText/CText";

interface buttonProps {
  mode?: ButtonMode;
  color?: string;
  buttonColor?: string;
  borderColor?: string;
  buttonTitle?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
  textColor?: string;
  icon?: boolean;
  loading?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  textContentStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}
const CustomButton: React.FC<buttonProps> = ({
  disabled,
  textContentStyle,
  mode = "text",
  color,
  icon,
  loading,
  buttonTitle,
  accessibilityLabel,
  accessibilityHint,
  testID = "button",
  buttonColor,
  borderColor,
  contentStyle,
  onPress,
}) => {
  const { colors } = useTheme();

  const { backgroundColor, textColor, borderWidth, borderRadius } =
    getButtonColors({
      mode,
      buttonColor,
      color,
      disabled,
    });

  return (
    <View style={styles.contentStyle}>
      <TouchableOpacity
        onPress={onPress}
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
        <View style={styles.innerContentStyle}>
          {icon ? (
            <View testID={`${testID}-icon-container`} style={contentStyle}>
              <Image
                style={[
                  styles.iconStyle,
                  {
                    tintColor:
                      mode === "contained" ? colors.text : colors.background,
                  },
                ]}
                source={require("../../assets/settings.png")}
              />
            </View>
          ) : null}
          {loading ? (
            <ActivityIndicator
              color={mode === "contained" ? colors.text : colors.background}
              style={styles.iconStyle}
            />
          ) : null}
          <Text
            testID={`${testID}-text`}
            accessibilityLabel={`${accessibilityLabel}-text`}
            accessibilityHint={`${accessibilityHint}-text`}
            style={[
              styles.buttonTextStyle,
              textContentStyle,
              {
                color: textColor
                  ? textColor
                  : mode === "contained"
                  ? colors.text
                  : colors.background,
              },
            ]}
          >
            {buttonTitle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: "center",
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  innerContentStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
