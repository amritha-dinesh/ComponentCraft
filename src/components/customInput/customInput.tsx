/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { blue500 } from "../../styles/themes/colors";

const BORDER_RADIUS = 5;

interface CustomInputProps {
  mode?: "outlined" | "rounded" | "standard";
  disabled?: boolean;
  passwordForm?: boolean;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "name-phone-pad"
    | "twitter"
    | "web-search";
  placeholder?: string;
  num?: boolean;
  testID?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  rightIcon?: string | React.ReactElement;
  leftIcon?: React.ReactElement;
  placeholderTextColor?: string;
  numberOfLines?: number;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  multiline?: boolean;
  textAlign?: "left" | "center" | "right";
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  defaultValue?: string | undefined;
  selectionColor?: string;
  borderRadius?: number;
  rightIconPress?: () => void;
  leftIconPress?: () => void;
}
const CustomInput: React.FC<CustomInputProps> = ({
  mode = "outlined",
  disabled = false,
  passwordForm = false,
  keyboardType = "default",
  placeholder = "placeholder",
  testID = "custom-input",
  onChangeText,
  value,
  rightIcon,
  leftIcon,
  placeholderTextColor = "gray",
  numberOfLines,
  autoCapitalize,
  multiline,
  textAlign,
  onFocus,
  onBlur,
  autoFocus = false,
  defaultValue,
  selectionColor,
  borderRadius = BORDER_RADIUS,
  rightIconPress,
  leftIconPress,
}) => {
  const { colors } = useTheme();
  const [focus, setFocus] = React.useState(false);
  const [icon, setIcon] = React.useState(false);
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <View
          style={[
            styles.sectionStyle,
            {
              backgroundColor: colors.background,
            },
            mode === "outlined"
              ? [
                  styles.outlined,
                  {
                    borderRadius: borderRadius,
                  },
                ]
              : mode === "rounded"
              ? [styles.rounded]
              : [styles.standards],
            focus === true && styles.focused,
          ]}
        >
          {leftIcon && (
            <TouchableOpacity onPress={leftIconPress}>
              {leftIcon}
            </TouchableOpacity>
          )}
          <TextInput
            style={[
              styles.flex,
              mode === "rounded" && {
                borderRadius: 22,
              },
              { color: colors.text },

              leftIcon && [styles.leftIconInput, { width: 10, flex: 1 }],
            ]}
            testID={testID}
            defaultValue={defaultValue}
            onPressIn={onBlur}
            onPressOut={onFocus}
            autoCapitalize={autoCapitalize}
            numberOfLines={numberOfLines}
            placeholderTextColor={placeholderTextColor}
            autoFocus={autoFocus}
            selectionColor={selectionColor}
            multiline={multiline}
            keyboardType={keyboardType}
            secureTextEntry={passwordForm && !icon ? true : false}
            textAlign={textAlign}
            editable={disabled ? false : true}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onFocus={() => {
              if (disabled === true) {
                setFocus(false);
              } else {
                setFocus(true);
              }
            }}
            onBlur={() => {
              setFocus(false);
            }}
          />
          {rightIcon && (
            <TouchableOpacity onPress={rightIconPress}>
              {rightIcon}
            </TouchableOpacity>
          )}
          {passwordForm && (
            <TouchableOpacity
              onPress={() => {
                setIcon(!icon);
              }}
            >
              <Image
                source={
                  !icon
                    ? require("../../assets/eye.png")
                    : require("../../assets/eye-off.png")
                }
                style={[styles.imageStyle, { tintColor: colors.text }]}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  sectionStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    right: 5,
    height: 20,
    width: 20,
    alignSelf: "center",
  },
  flex: {
    flex: 1,
    padding: 10,
  },
  outlined: {
    borderWidth: Platform.OS === "ios" ? 1 : 0.5,
  },
  rounded: {
    borderWidth: Platform.OS === "ios" ? 1 : 0.5,
    borderRadius: 22,
  },
  standards: {
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0.5,
  },
  focused: {
    borderColor: blue500,
  },
  leftIconInput: {
    paddingLeft: 20,
  },
});

export default CustomInput;
