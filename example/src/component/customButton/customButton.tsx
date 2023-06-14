import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import CustomButtons from "../../../../src/components/customButton/customButton";
type Props = React.ComponentPropsWithRef<typeof Text> & {};

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
          buttonColor="skyblue"
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
          buttonColor="skyblue"
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
          buttonColor="skyblue"
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
          buttonColor="gray"
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
          buttonColor="skyblue"
          disabled
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
CustomButton.title = "CustomButton";
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
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  contained: {
    backgroundColor: "skyblue",
    borderColor: "skyblue",
    borderWidth: 1,
    borderRadius: 5,
  },

  white: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
