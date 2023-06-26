import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import { white, lightBlue500 } from "../../utils/themes/colors";
import { RadioButtonGroup } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & {};
let options = [
  { label: "Java", value: "true" },
  { label: "Kotlin", value: "false" },
];
const CustomRadioButtonGroup = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={styles.white}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Default Radio Button Group</Text>
        </View>
        <View style={styles.paddingTop}>
          <RadioButtonGroup options={options} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Disabled Radio Button Group</Text>
        </View>
        <View style={styles.paddingTop}>
          <RadioButtonGroup disabled options={options} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            Radio Button Group in different colours
          </Text>
        </View>
        <View style={styles.paddingTop}>
          <RadioButtonGroup
            options={options}
            fillColor={"orange"}
            labelColor={"orange"}
          />
        </View>
        <View style={styles.paddingTop}>
          <RadioButtonGroup
            options={options}
            fillColor={"skyblue"}
            labelColor={"skyblue"}
          />
        </View>
        <View style={styles.paddingTop}>
          <RadioButtonGroup
            options={options}
            fillColor={"green"}
            labelColor={"green"}
          />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default CustomRadioButtonGroup;
CustomRadioButtonGroup.title = "RadioButtonGroup";

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
  paddingTop: {
    paddingTop: "1%",
    left: 10,
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
