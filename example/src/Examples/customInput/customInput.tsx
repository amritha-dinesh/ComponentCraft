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
import { white } from "../../utils/themes/colors";
import { CustomInput as CustomInputs } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof TextInput> & {};

const CustomInput = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={styles.white}>
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
            style={styles.leftIcon}
          />
        }
      />
      <CustomInputs
        mode="standard"
        leftIcon={
          <Image
            source={require("../../../assets/mail.png")}
            style={styles.leftIcon}
          />
        }
        label=""
        placeholder="Standard Input"
      />
      <CustomInputs
        leftIcon={
          <Image
            source={require("../../../assets/mail.png")}
            style={styles.leftIcon}
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
            style={styles.icon}
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
            style={styles.icon}
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
            style={styles.icon}
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
CustomInput.title = "Input";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
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
