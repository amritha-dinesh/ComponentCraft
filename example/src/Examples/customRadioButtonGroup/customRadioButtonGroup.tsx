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
  white,
  lightBlue400,
  green400,
  orange500,
} from "../../utils/themes/colors";
import { RadioButtonGroup } from "component-craft";
import { useTheme } from "@react-navigation/native";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & object;
const options = [
  { label: "Java", value: "true" },
  { label: "Kotlin", value: "false" },
];
const CustomRadioButtonGroup = ({}: Props) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={styles.titleView}>
            <Text style={[styles.title, { color: colors.text }]}>
              Default Radio Button Group
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <RadioButtonGroup options={options} />
          </View>
          <View style={styles.titleView}>
            <Text style={[styles.title, { color: colors.text }]}>
              Disabled Radio Button Group
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <RadioButtonGroup disabled options={options} />
          </View>
          <View style={styles.titleView}>
            <Text style={[styles.title, { color: colors.text }]}>
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
};
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
});
