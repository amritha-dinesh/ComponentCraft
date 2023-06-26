import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { white, lightBlue50, greenA700 } from "../../utils/themes/colors";
import { Dropdown as Dropdowns } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof ScrollView> & object;
const options = ["Option 1", "Option 2", "Option 3"];
const Dropdown = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={styles.white}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Multi Select Dropdown</Text>
        </View>
        <View style={styles.dropDownContainer}>
          <Dropdowns
            multiSelect
            selectedItemColor={lightBlue50}
            selectedItemIconColor={greenA700}
            options={options}
            defaultOption={"Select an option"}
          />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default Dropdown;
Dropdown.title = "Dropdown";

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
  dropDownContainer: {
    width: "90%",
    alignSelf: "center",
    paddingTop: 20,
  },
});
