import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import {
  white,
  lightBlue500,
  blueA700,
  grey400,
} from "../../utils/themes/colors";
import { CustomDialog as CustomDialogs } from "component-craft";

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
      <ScrollView style={{ backgroundColor: grey400 }}>
        <View style={[styles.container, { backgroundColor: grey400 }]}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog1")}
              style={[styles.button, { backgroundColor: white }]}
            >
              <Text style={styles.buttonText}>Long text</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog2")}
              style={[styles.button, { backgroundColor: white }]}
            >
              <Text style={styles.buttonText}>Progress Indicator</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog3")}
              style={[styles.button, { backgroundColor: white }]}
            >
              <Text style={styles.buttonText}>Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog4")}
              style={[styles.button, { backgroundColor: white }]}
            >
              <Text style={styles.buttonText}>Double Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={_toggleDialog("dialog5")}
              style={[styles.button, { backgroundColor: white }]}
            >
              <Text style={styles.buttonText}>Custom Color</Text>
            </TouchableOpacity>
          </View>
          <CustomDialogs
            visible={_getVisible("dialog1")}
            onClose={_toggleDialog("dialog1")}
            title="Dialog with long Text"
            message="Material is the metaphor A material metaphor is the unifying theory of a rationalized space and a system of motion. The material is grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic.Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances. Yet the flexibility of the material creates new affordances that supersede those in the physical world, without breaking the rules of physics. The fundamentals of light, surface, and movement are key to conveying how objects move, interact, and exist in space and in relation to each other. Realistic lighting shows seams, divides space, and indicates moving parts. A material metaphor is the unifying theory of a rationalized space and a system of motion. The material is grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic. Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances. Yet the flexibility of the material creates new affordances that supersede those in the physical world, without breaking the rules of physics. The fundamentals of light, surface, and movement are key to conveying how objects move, interact, and exist in space and in relation to each other. Realistic lighting shows seams, divides space, and indicates moving parts."
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
            message="Material is the metaphor A material metaphor is the unifying theory of a rationalized space and a system of motion. The material is grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic.Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances. Yet the flexibility of the material creates new affordances that supersede those in the physical world, without breaking the rules of physics. The fundamentals of light, surface, and movement are key to conveying how objects move, interact, and exist in space and in relation to each other. Realistic lighting shows seams, divides space, and indicates moving parts. A material metaphor is the unifying theory of a rationalized space and a system of motion. The material is grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic. Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances. Yet the flexibility of the material creates new affordances that supersede those in the physical world, without breaking the rules of physics. The fundamentals of light, surface, and movement are key to conveying how objects move, interact, and exist in space and in relation to each other. Realistic lighting shows seams, divides space, and indicates moving parts."
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
