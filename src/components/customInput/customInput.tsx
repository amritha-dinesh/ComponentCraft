import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import { black, grey50, white, blue500 } from "../../styles/themes/colors";

interface CustomInputProps {
  mode?: "outlined" | "filled" | "standard";
  disabled?: boolean;
  passwordForm?: boolean;
  keyboardType?: "numeric" | "default";
  label?: string;
  placeholder?: string;
  num?: boolean;
  testID?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  rightIcon?: string | React.ReactElement;
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
  labelColor?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  mode = "filled",
  disabled = false,
  passwordForm = false,
  keyboardType = "default",
  label = "Label Name",
  placeholder = "placeholder",
  testID = "custom-input",
  onChangeText,
  value,
  rightIcon,
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
  labelColor = black,
  ...props
}) => {
  const animatedLabelStyle = new Animated.Value(1);
  const [focus, setFocus] = useState(false);
  const [icon, setIcon] = useState(false);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Animated.Text
            {...props}
            testID={"label"}
            style={[
              styles.labelStyle,
              animatedLabelStyle,
              { color: labelColor },
            ]}
          >
            {label}
          </Animated.Text>
          <View style={styles.inputContainer}>
            <TextInput
              {...props}
              testID={testID}
              defaultValue={defaultValue}
              onPressIn={onBlur}
              onPressOut={onFocus}
              autoCapitalize={autoCapitalize}
              numberOfLines={numberOfLines}
              placeholderTextColor={placeholderTextColor}
              autoFocus={autoFocus}
              selectionColor={selectionColor}
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
              multiline={multiline}
              keyboardType={keyboardType}
              secureTextEntry={passwordForm && !icon ? true : false}
              textAlign={textAlign}
              editable={disabled ? false : true}
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              style={[
                styles.input,
                mode === "outlined"
                  ? styles.outlined
                  : mode === "filled"
                  ? styles.filled
                  : styles.standards,
                focus === true && styles.focused,
              ]}
            />
            {rightIcon && (
              <TouchableOpacity onPress={() => setIcon(!icon)}>
                {typeof rightIcon === "string" ? (
                  <Image source={{ uri: rightIcon }} style={styles.icon} />
                ) : (
                  rightIcon
                )}
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
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    width: "100%",
  },
  outlined: {
    borderWidth: Platform.OS === "ios" ? 1 : 0.5,
    backgroundColor: "transparent",
  },
  filled: {
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0.5,
    backgroundColor: grey50,
  },
  focused: {
    borderColor: blue500,
  },
  standards: {
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0.5,
    backgroundColor: "transparent",
  },
  input: {
    width: "100%",
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
  },
  icon: {
    height: 20,
    width: 20,
    marginTop: 33,
    right: 30,
  },
  labelStyle: {
    position: "absolute",
  },
  subContainer: {
    alignSelf: "center",
    width: "90%",
  },
  main: {
    flex: 1,
  },
});
export default CustomInput;
