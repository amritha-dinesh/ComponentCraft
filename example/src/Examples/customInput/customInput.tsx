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
import { grey400 } from "../../utils/themes/colors";
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
          <CustomInputs mode="rounded" placeholder="Rounded Input" />
          <CustomInputs mode="standard" placeholder="Standard Input" />
          <CustomInputs mode="outlined" placeholder="Outlined Input" />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Input as Password Field</Text>
        </View>
        <CustomInputs mode="rounded" placeholder="Rounded Input" passwordForm />
        <CustomInputs
          mode="standard"
          placeholder="Standard Input"
          passwordForm
        />
        <CustomInputs
          mode="outlined"
          placeholder="Outlined Input"
          passwordForm
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>Input with Left Icon</Text>
        </View>
        <CustomInputs
          mode="rounded"
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
          placeholder="Rounded Input"
        />
        <CustomInputs
          mode="standard"
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
          placeholder="Rounded Input"
        />

        <CustomInputs
          defaultValue="Test12345"
          mode="standard"
          passwordForm
          placeholder="Standard Input"
        />
        <CustomInputs
          defaultValue="Test12345"
          mode="outlined"
          placeholder="Outlined Input"
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>Disabled Input</Text>
        </View>
        <CustomInputs disabled mode="rounded" placeholder="Rounded Input" />
        <CustomInputs disabled mode="standard" placeholder="Standard Input" />
        <CustomInputs disabled mode="outlined" placeholder="Outlined Input" />
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
  icon: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    alignSelf: "center",
    right: 5,
  },
  leftIcon: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    alignSelf: "center",
    left: 5,
  },

  main: {
    flex: 1,
  },
});
export default CustomInput;
