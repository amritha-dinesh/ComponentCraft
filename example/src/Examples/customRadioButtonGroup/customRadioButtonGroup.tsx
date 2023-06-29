import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import {
  lightBlue400,
  green400,
  orange500,
  grey400,
} from "../../utils/themes/colors";
import { RadioButtonGroup } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & object;
const options = [
  { label: "Java", value: "true" },
  { label: "Kotlin", value: "false" },
];
const CustomRadioButtonGroup = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={{ backgroundColor: grey400 }}>
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
            fillColor={orange500}
            labelColor={orange500}
          />
        </View>
        <View style={styles.paddingTop}>
          <RadioButtonGroup
            options={options}
            fillColor={lightBlue400}
            labelColor={lightBlue400}
          />
        </View>
        <View style={styles.paddingTop}>
          <RadioButtonGroup
            options={options}
            fillColor={green400}
            labelColor={green400}
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
  container: {
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
});
