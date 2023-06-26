import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import { white, lightBlue500, blueA700 } from "../../utils/themes/colors";
import { CustomDialog as CustomDialogs } from "component-craft";
import { longText } from "./mockTextData";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & object;
type ButtonVisibility = {
  [key: string]: boolean | undefined;
};
const CustomDialog = ({}: Props) => {
  const [visible, setVisible] = useState<ButtonVisibility>({});
  const _toggleDialog = (name: string) => () =>
    setVisible({ ...visible, [name]: !visible[name] });

  const _getVisible = (name: string) => !!visible[name];
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.white}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog1")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Long text</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog2")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Progress Indicator</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog3")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog4")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Double Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog5")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Custom Color</Text>
            </TouchableOpacity>
          </View>
          <CustomDialogs
            visible={_getVisible("dialog1")}
            onClose={_toggleDialog("dialog1")}
            title="Dialog with long Text"
            message={longText}
          />
          <CustomDialogs
            visible={_getVisible("dialog2")}
            onClose={_toggleDialog("dialog2")}
            title="Dialog with Loader"
            message=""
            loader
          />
          <CustomDialogs
            visible={_getVisible("dialog3")}
            onClose={_toggleDialog("dialog3")}
            title="Dialog with Button"
            message="Material is the metaphor A material metaphor is the unifying theory of a rationalized space and a system of motion"
            button="Confirm"
          />
          <CustomDialogs
            visible={_getVisible("dialog4")}
            onClose={_toggleDialog("dialog4")}
            title="Dialog with Button"
            message="Material is the metaphor A material metaphor is the unifying theory of a rationalized space and a system of motion"
            firstButton="Agree"
            secondButton="Cancel"
            doubleButton
          />
          <CustomDialogs
            visible={_getVisible("dialog5")}
            onClose={_toggleDialog("dialog5")}
            title="Dialog with custom color"
            message={longText}
            backgroundColor={lightBlue500}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CustomDialog;
CustomDialog.title = "Dialog";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  white: {
    backgroundColor: white,
  },
  container: {
    flex: 1,
    backgroundColor: white,
    width: "100%",
  },
  button: {
    borderWidth: 0.5,
    alignSelf: "center",
    padding: 10,
    borderRadius: 15,
    width: "80%",
  },
  buttonText: {
    textAlign: "center",
    color: blueA700,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
