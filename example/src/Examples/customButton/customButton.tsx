import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { CustomButton as CustomButtons } from "component-craft";
import { useTheme } from "@react-navigation/native";
import { grey400 } from "../../utils/themes/colors";

type Props = React.ComponentPropsWithRef<typeof Text> & object;

const CustomButton = ({}: Props) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: grey400 }]}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mode's of Button</Text>
        </View>
        <View style={styles.paddingTop}>
          <CustomButtons
            mode="outlined"
            borderColor={colors.background}
            buttonTitle="Outlined Button"
          />
        </View>
        <View style={styles.paddingTop}>
          <CustomButtons mode="text" buttonTitle="Text Button" />
        </View>
        <View style={styles.paddingTop}>
          <CustomButtons
            mode="contained"
            buttonTitle="Contained Button"
            borderColor={colors.background}
            buttonColor={colors.background}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Button with Icon</Text>
        </View>
        <View style={styles.paddingTop}>
          <CustomButtons
            mode="outlined"
            borderColor={colors.background}
            buttonTitle="Outlined Button"
            icon
          />
        </View>
        <View style={styles.paddingTop}>
          <CustomButtons mode="text" buttonTitle="Text Button" icon />
        </View>
        <View style={styles.paddingTop}>
          <CustomButtons
            mode="contained"
            buttonTitle="Contained Button"
            buttonColor={colors.background}
            borderColor={colors.background}
            icon
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Button with Loader</Text>
        </View>
        <View style={styles.paddingTop}>
          <CustomButtons
            mode="outlined"
            buttonTitle="Outlined Button"
            borderColor={colors.background}
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
            borderColor={colors.background}
            buttonColor={colors.background}
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
            borderColor={colors.background}
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
            borderColor={colors.background}
            buttonColor={colors.background}
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
  container: {
    flex: 1,
  },
});
