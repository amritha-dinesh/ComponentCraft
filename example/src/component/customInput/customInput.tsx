/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { black, grey200, white, blue500 } from "../../themes/colors";

const BORDER_RADIUS = 5;

type Props = React.ComponentPropsWithRef<typeof TextInput> & {
  disabled?: boolean;
  value?: string;
  borderRadius?: number;
  labelColor: string;
};

const CustomInput = ({
  disabled = false,
  value,
  labelColor = black,
  borderRadius = BORDER_RADIUS,
}: Props) => {
  const animatedLabelStyle = new Animated.Value(1);
  const [focus, setFocus] = useState(false);
  const [filledIcon, setFilledIcon] = useState(false);
  const [outlinedIcon, setOutlinedIcon] = useState(false);
  const [standardIcon, setStandardIcon] = useState(false);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={{ paddingTop: 15, left: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Mode's of Input
            </Text>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Filled Input Label</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  editable={disabled ? false : true}
                  placeholder={"Filled Input"}
                  style={[
                    styles.input,
                    styles.filled,
                    focus === true && styles.focused,
                  ]}
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
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Outlined Input Label</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  editable={disabled ? false : true}
                  placeholder={"Outlined Input"}
                  style={[
                    styles.input,
                    [styles.outlined, { borderRadius: borderRadius }],
                  ]}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Outlined Input Label</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  editable={disabled ? false : true}
                  placeholder={"Standard Input"}
                  style={[styles.input, styles.standards]}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 15, left: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Input as Password Field
            </Text>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Filled Input Password Field </Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  secureTextEntry={!filledIcon ? true : false}
                  editable={disabled ? false : true}
                  placeholder={"filled Input"}
                  style={[styles.input, styles.filled]}
                />

                <TouchableOpacity
                  onPress={() => {
                    setFilledIcon(!filledIcon);
                  }}
                >
                  <Image
                    source={
                      !filledIcon
                        ? require("../../assets/eye.png")
                        : require("../../assets/eye-off.png")
                    }
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Outlined Input Password Field </Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={value}
                  secureTextEntry={!outlinedIcon ? true : false}
                  editable={disabled ? false : true}
                  placeholder={"Outlined Input"}
                  style={[
                    styles.input,
                    styles.outlined,
                    { borderRadius: borderRadius },
                  ]}
                />

                <TouchableOpacity
                  onPress={() => {
                    setOutlinedIcon(!outlinedIcon);
                  }}
                >
                  <Image
                    source={
                      !outlinedIcon
                        ? require("../../assets/eye.png")
                        : require("../../assets/eye-off.png")
                    }
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Standard Input Password Field </Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={value}
                  secureTextEntry={!standardIcon ? true : false}
                  editable={disabled ? false : true}
                  placeholder={"Standard Input"}
                  style={[styles.input, styles.standards]}
                />
                <TouchableOpacity
                  onPress={() => {
                    setStandardIcon(!standardIcon);
                  }}
                >
                  <Image
                    source={
                      !standardIcon
                        ? require("../../assets/eye.png")
                        : require("../../assets/eye-off.png")
                    }
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 15, left: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Input with Left Icon
            </Text>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Outlined Input with LeftIcon</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/mail.png")}
                    style={styles.leftIcon}
                  />
                </TouchableOpacity>
                <TextInput
                  editable={disabled ? false : true}
                  placeholder={"Outlined Input"}
                  style={[
                    styles.input,
                    styles.outlined,
                    { borderRadius: borderRadius, paddingLeft: 35 },
                  ]}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Standard Input with LeftIcon</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/mail.png")}
                    style={styles.leftIcon}
                  />
                </TouchableOpacity>
                <TextInput
                  editable={disabled ? false : true}
                  placeholder={"Stnadard Input"}
                  style={[styles.input, styles.standards, { paddingLeft: 35 }]}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 15, left: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Input with Right Icon
            </Text>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Filled Input Label with rightIcon</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  editable={disabled ? false : true}
                  placeholder={"Filled Input"}
                  style={[styles.input, [styles.filled]]}
                />

                <TouchableOpacity>
                  <Image
                    source={require("../../assets/edit.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Outlined Input Label with rightIcon</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  editable={disabled ? false : true}
                  placeholder={"Outlined Input"}
                  style={[
                    styles.input,
                    [styles.outlined],
                    { borderRadius: borderRadius },
                  ]}
                />

                <TouchableOpacity>
                  <Image
                    source={require("../../assets/edit.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Standard Input Label with rightIcon</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  editable={disabled ? false : true}
                  placeholder={"Standard Input"}
                  style={[styles.input, [styles.standards]]}
                />

                <TouchableOpacity>
                  <Image
                    source={require("../../assets/edit.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 15, left: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Input with Default Value
            </Text>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Filled Input with default Value</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  defaultValue="Test1"
                  editable={disabled ? false : true}
                  placeholder={"Standard Input"}
                  style={[styles.input, [styles.filled]]}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Outlined Input with default Value</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  defaultValue="Test2"
                  editable={disabled ? false : true}
                  placeholder={"Outlined Input"}
                  style={[
                    styles.input,
                    [styles.outlined],
                    { borderRadius: borderRadius },
                  ]}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: "5%" }}>
            <View style={styles.subContainer}>
              <Animated.Text
                style={[
                  styles.labelStyle,
                  animatedLabelStyle,
                  { color: labelColor },
                ]}
              >
                <Text>Standard Input with default Value</Text>
              </Animated.Text>
              <View style={styles.inputContainer}>
                <TextInput
                  defaultValue="Test1"
                  editable={disabled ? false : true}
                  placeholder={"Standard Input"}
                  style={[styles.input, [styles.standards]]}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
CustomInput.title = "CustomInput";

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
    backgroundColor: grey200,
  },
  focused: {
    borderColor: blue500,
  },
  standards: {
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0.5,
    backgroundColor: "transparent",
  },
  leftIconInput: {
    paddingLeft: 40,
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
  leftIcon: {
    height: 20,
    width: 20,
    marginTop: 33,
    position: "absolute",
    left: 10,
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
