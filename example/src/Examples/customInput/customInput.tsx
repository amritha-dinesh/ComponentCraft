import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { white, grey400 } from "../../utils/themes/colors";
import { CustomInput as CustomInputs } from "component-craft";
import { useTheme } from "@react-navigation/native";

type Props = React.ComponentPropsWithRef<typeof TextInput> & object;

const CustomInput = ({}: Props) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ backgroundColor: grey400 }}>
        <View style={styles.container}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Mode's of Input</Text>
          </View>
          <CustomInputs mode="rounded" label="" placeholder="Rounded Input" />
          <CustomInputs mode="standard" label="" placeholder="Standard Input" />
          <CustomInputs mode="outlined" label="" placeholder="Outlined Input" />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Input as Password Field</Text>
        </View>
        <CustomInputs
          mode="rounded"
          label=""
          placeholder="Rounded Input"
          passwordForm
        />
        <CustomInputs
          mode="standard"
          label=""
          placeholder="Standard Input"
          passwordForm
        />
        <CustomInputs
          mode="outlined"
          label=""
          placeholder="Outlined Input"
          passwordForm
        />

        <View style={styles.titleView}>
          <Text style={styles.title}>Input with Left Icon</Text>
        </View>
        <CustomInputs
          mode="rounded"
          label=""
          placeholder="Rounded Input"
          leftIcon={
            <Image
              source={require("../../../assets/mail.png")}
              style={[styles.leftIcon, { tintColor: colors.text }]}
            />
          }
        />
        <CustomInputs
          mode="standard"
          leftIcon={
            <Image
              source={require("../../../assets/mail.png")}
              style={[styles.leftIcon, { tintColor: colors.text }]}
            />
          }
          label=""
          placeholder="Standard Input"
        />
        <CustomInputs
          leftIcon={
            <Image
              source={require("../../../assets/mail.png")}
              style={[styles.leftIcon, { tintColor: colors.text }]}
            />
          }
          mode="outlined"
          label=""
          placeholder="Outlined Input"
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>Input with Right Icon</Text>
        </View>
        <CustomInputs
          rightIcon={
            <Image
              source={require("../../../assets/edit.png")}
              style={[styles.icon, { tintColor: colors.text }]}
            />
          }
          mode="rounded"
          label=""
          placeholder="Rounded Input"
        />
        <CustomInputs
          mode="standard"
          label=""
          placeholder="Standard Input"
          rightIcon={
            <Image
              source={require("../../../assets/edit.png")}
              style={[styles.icon, { tintColor: colors.text }]}
            />
          }
        />
        <CustomInputs
          mode="outlined"
          label=""
          placeholder="Outlined Input"
          rightIcon={
            <Image
              source={require("../../../assets/edit.png")}
              style={[styles.icon, { tintColor: colors.text }]}
            />
          }
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>Input with Default Value</Text>
        </View>
        <CustomInputs
          defaultValue="Test12345"
          mode="rounded"
          label=""
          placeholder="Rounded Input"
        />
        <CustomInputs
          defaultValue="Test12345"
          mode="standard"
          label=""
          passwordForm
          placeholder="Standard Input"
        />
        <CustomInputs
          defaultValue="Test12345"
          mode="outlined"
          label=""
          placeholder="Outlined Input"
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>Disabled Input</Text>
        </View>
        <CustomInputs
          disabled
          mode="rounded"
          label=""
          placeholder="Rounded Input"
        />
        <CustomInputs
          disabled
          mode="standard"
          label=""
          placeholder="Standard Input"
        />
        <CustomInputs
          disabled
          mode="outlined"
          label=""
          placeholder="Outlined Input"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
CustomInput.title = "CustomInput";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  titleView: {
    paddingTop: 15,
    left: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
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

  main: {
    flex: 1,
  },
  white: {
    backgroundColor: white,
  },
});
export default CustomInput;
