import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { white, lightBlue500 } from "../../utils/themes/colors";
// import CustomCards from "../../../../src/components/customCard/customCard";
// import { CText } from "component-craft";
type Props = React.ComponentPropsWithRef<typeof Text> & {};

const CustomText = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={styles.white}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Mode's of Text</Text>
        </View>
        {/* <CText /> */}
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default CustomText;
CustomText.title = "CustomText";

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
  titleView: {
    paddingTop: 15,
    left: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  image: {
    alignSelf: "center",
    height: 360,
    width: "90%",
    marginBottom: 20,
  },
  button: {
    borderWidth: 0.5,
    alignSelf: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: lightBlue500,
  },
});
