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
  black,
  grey400,
  blue900,
  blue100,
} from "../../utils/themes/colors";
import { CustomProgressBar as CustomProgressBars } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & object;

const CustomProgressBar = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={{ backgroundColor: grey400 }}>
      <View style={[styles.container, { backgroundColor: grey400 }]}>
        <View style={styles.titleView}>
          <Text style={[styles.title, { color: black }]}>
            Default ProgressBar
          </Text>
        </View>
        <View style={styles.paddingTop}>
          <CustomProgressBars progress={3} height={10} width={100} />
        </View>
        <View style={styles.titleView}>
          <Text style={[styles.title, { color: black }]}>
            Default ProgressBar with varying height,width and progress
          </Text>
        </View>
        <View style={styles.paddingTop}>
          <CustomProgressBars progress={10} height={20} width={200} />
        </View>
        <View style={styles.titleView}>
          <Text style={[styles.title, { color: black }]}>
            ProgressBar with custom colors
          </Text>
        </View>
        <View style={styles.paddingTop}>
          <CustomProgressBars
            progress={70}
            height={10}
            width={100}
            barColor={blue900}
            backgroundColor={blue100}
          />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default CustomProgressBar;
CustomProgressBar.title = "ProgressBar";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  paddingTop: {
    paddingTop: "1%",
    left: 10,
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
});
