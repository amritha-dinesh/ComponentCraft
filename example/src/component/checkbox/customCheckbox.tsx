import React, { useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  ColorValue,
  ImageSourcePropType,
  // StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { black, grey500 } from "../../themes/colors";

const DEFAULT_SIZE = 40;

type Props = React.ComponentPropsWithRef<typeof Image> & {
  testID?: string;
  value?: boolean;
  onValueChanged?: (value: boolean) => void;
  disabled?: boolean;
  labelColor?: ColorValue;
  disabledColor?: ColorValue;
  labelFontSize?: number;
  checkedImage?: ImageSourcePropType;
  unCheckedImage?: ImageSourcePropType;
  size?: number;
  labelFontFamily?: string | undefined;
};

const CustomCheckBox = ({
  value = false,
  onValueChanged = () => {
    "true";
  },
  disabled = false,
  labelColor = black,
  disabledColor = grey500,
  labelFontSize,
  checkedImage,
  unCheckedImage,
  size = DEFAULT_SIZE,
  labelFontFamily,
}: Props) => {
  const [leftChecked, setLeftChecked] = useState(value);
  const [rightChecked, setRightChecked] = useState(value);
  const [checked, setChecked] = useState(value);
  const [color, setColor] = useState(true);
  const [small, setSmall] = useState(true);
  const [medium, setMedium] = useState(true);
  const [large, setLarge] = useState(true);
  const [defaultValue, setDefaultValue] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Check box with label position & Enabled
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row-reverse",
              padding: "5%",
            }}
          >
            <TouchableOpacity
              disabled={disabled}
              onPress={() => {
                onValueChanged(!leftChecked);
                setLeftChecked(!leftChecked);
              }}
              activeOpacity={0.8}
            >
              <Image
                source={
                  leftChecked
                    ? checkedImage || require("../../assets/fillChecked.png")
                    : unCheckedImage || require("../../assets/unchecked.png")
                }
                style={[
                  { width: size, height: size },
                  leftChecked && { tintColor: black },
                ]}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: disabled ? disabledColor : labelColor,
                fontSize: labelFontSize,
                fontFamily: labelFontFamily,
                paddingTop: "3%",
              }}
            >
              Left Side label
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity
              disabled={disabled}
              onPress={() => {
                onValueChanged(!rightChecked);
                setRightChecked(!rightChecked);
              }}
              activeOpacity={0.8}
            >
              <Image
                source={
                  rightChecked
                    ? checkedImage || require("../../assets/fillChecked.png")
                    : unCheckedImage || require("../../assets/unchecked.png")
                }
                style={[
                  { width: size, height: size },
                  rightChecked && { tintColor: black },
                ]}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: disabled ? disabledColor : labelColor,
                fontSize: labelFontSize,
                fontFamily: labelFontFamily,
                paddingTop: "3%",
              }}
            >
              Right Side Label
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Check box in Disable mode
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity disabled={true} activeOpacity={0.8}>
              <Image
                source={require("../../assets/unchecked.png")}
                style={{
                  width: size,
                  height: size,
                  tintColor: grey500,
                }}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: disabledColor,
                fontSize: labelFontSize,
                fontFamily: labelFontFamily,
                paddingTop: "3%",
              }}
            >
              Disabled
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Check box without label & enabled
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity
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
                style={[
                  { width: size, height: size },
                  checked && { tintColor: black },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Check box with Default Value
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onValueChanged(!defaultValue);
                setDefaultValue(!defaultValue);
              }}
              activeOpacity={0.8}
            >
              <Image
                source={
                  defaultValue
                    ? checkedImage || require("../../assets/fillChecked.png")
                    : unCheckedImage || require("../../assets/unchecked.png")
                }
                style={[
                  { width: size, height: size },
                  defaultValue && { tintColor: black },
                ]}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: labelColor,
                fontSize: labelFontSize,
                fontFamily: labelFontFamily,
                paddingTop: "3%",
              }}
            >
              Enable Mode
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onValueChanged(!checked);
                setChecked(!checked);
              }}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../assets/fillChecked.png")}
                style={[
                  { width: size, height: size, tintColor: disabledColor },
                ]}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: disabledColor,
                fontSize: labelFontSize,
                fontFamily: labelFontFamily,
                paddingTop: "3%",
              }}
            >
              Disable Mode
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Check box with label color & filled color
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity
              disabled={disabled}
              onPress={() => {
                onValueChanged(!color);
                setColor(!color);
              }}
              activeOpacity={0.8}
            >
              <Image
                source={
                  color
                    ? checkedImage || require("../../assets/fillChecked.png")
                    : unCheckedImage || require("../../assets/unchecked.png")
                }
                style={[
                  { width: size, height: size },
                  color && { tintColor: "green" },
                ]}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: "green",
                fontSize: labelFontSize,
                fontFamily: labelFontFamily,
                paddingTop: "3%",
              }}
            >
              Color Label
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Check box with different Size
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity
              disabled={disabled}
              onPress={() => {
                onValueChanged(!small);
                setSmall(!small);
              }}
              activeOpacity={0.8}
            >
              <Image
                source={
                  small
                    ? checkedImage || require("../../assets/fillChecked.png")
                    : unCheckedImage || require("../../assets/unchecked.png")
                }
                style={[
                  { width: 20, height: 20 },
                  small && { tintColor: "black" },
                ]}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: labelColor,
                fontSize: 10,
                fontFamily: labelFontFamily,
                paddingTop: "1.5%",
              }}
            >
              Small Size
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity
              disabled={disabled}
              onPress={() => {
                onValueChanged(!medium);
                setMedium(!medium);
              }}
              activeOpacity={0.8}
            >
              <Image
                source={
                  medium
                    ? checkedImage || require("../../assets/fillChecked.png")
                    : unCheckedImage || require("../../assets/unchecked.png")
                }
                style={[
                  { width: 30, height: 30 },
                  medium && { tintColor: "black" },
                ]}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: labelColor,
                fontSize: 13,
                fontFamily: labelFontFamily,
                paddingTop: "2%",
              }}
            >
              medium Size
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignSelf: "flex-start" }}>
          <View
            style={{
              flexDirection: "row",
              padding: "5%",
            }}
          >
            <TouchableOpacity
              disabled={disabled}
              onPress={() => {
                onValueChanged(!large);
                setLarge(!large);
              }}
              activeOpacity={0.8}
            >
              <Image
                source={
                  large
                    ? checkedImage || require("../../assets/fillChecked.png")
                    : unCheckedImage || require("../../assets/unchecked.png")
                }
                style={[
                  { width: 40, height: 40 },
                  large && { tintColor: "black" },
                ]}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: labelColor,
                fontSize: 14,
                fontFamily: labelFontFamily,
                paddingTop: "3%",
              }}
            >
              Large Size
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
CustomCheckBox.title = "CustomCheckBox";

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     alignSelf: "flex-start",
//   },
//   checkboxContainer: {
//     width: 20,
//     height: 20,
//     borderRadius: 4,
//     borderWidth: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   checkIcon: {
//     alignSelf: "center",
//   },
// });

export default CustomCheckBox;
