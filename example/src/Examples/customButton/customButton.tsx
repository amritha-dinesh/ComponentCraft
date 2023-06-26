import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { CustomButton as CustomButtons } from "component-craft";
import { white, lightBlue600, grey300 } from "../../utils/themes/colors";
type Props = React.ComponentPropsWithRef<typeof Text> & object;

const CustomButton = ({}: Props) => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.white}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mode's of Button</Text>
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons mode="outlined" buttonTitle="Outlined Button" />
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons mode="text" buttonTitle="Text Button" />
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons
          mode="contained"
          buttonTitle="Contained Button"
          buttonColor={lightBlue600}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Button with Icon</Text>
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons mode="outlined" buttonTitle="Outlined Button" icon />
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons mode="text" buttonTitle="Text Button" icon />
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons
          mode="contained"
          buttonTitle="Contained Button"
          buttonColor={lightBlue600}
          icon
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Button with Loader</Text>
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons mode="outlined" buttonTitle="Outlined Button" loading />
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons mode="text" buttonTitle="Text Button" loading />
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons
          mode="contained"
          buttonTitle="Contained Button"
          buttonColor={lightBlue600}
          loading
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Disabled Button</Text>
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons
          mode="outlined"
          buttonTitle="Outlined Button"
          buttonColor={grey300}
          disabled
        />
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons mode="text" buttonTitle="Text Button" disabled />
      </View>
      <View style={styles.paddingTop}>
        <CustomButtons
          mode="contained"
          buttonTitle="Contained Button"
          buttonColor={lightBlue600}
          disabled
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
CustomButton.title = "Button";
export default CustomButton;
const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 15,
    left: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  paddingTop: {
    paddingTop: "5%",
  },

  outlined: {
    backgroundColor: "transparent",
    borderColor: grey300,
    borderWidth: 1,
    borderRadius: 5,
  },
  contained: {
    backgroundColor: lightBlue600,
    borderColor: lightBlue600,
    borderWidth: 1,
    borderRadius: 5,
  },

  white: {
    backgroundColor: white,
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
