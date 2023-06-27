import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { CustomButton as CustomButtons } from "component-craft";
import { useTheme } from "@react-navigation/native";

type Props = React.ComponentPropsWithRef<typeof Text> & object;

const CustomButton = ({}: Props) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView
        style={[styles.white, { backgroundColor: colors.background }]}
      >
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.text }]}>
            Mode's of Button
          </Text>
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
          <Text style={[styles.title, { color: colors.text }]}>
            Button with Icon
          </Text>
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
          <Text style={[styles.title, { color: colors.text }]}>
            Button with Loader
          </Text>
        </View>
        <View style={styles.paddingTop}>
          <CustomButtons
            mode="outlined"
            buttonTitle="Outlined Button"
            loading
          />
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
          <Text style={[styles.title, { color: colors.text }]}>
            Disabled Button
          </Text>
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
};
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
