import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import { white } from "../../utils/themes/colors";
import { CustomProgressBar as CustomProgressBars } from "component-craft";
import { useTheme } from "@react-navigation/native";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & object;

const CustomProgressBar = ({}: Props) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={styles.titleView}>
            <Text style={[styles.title, { color: colors.text }]}>
              Default ProgressBar
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <CustomProgressBars progress={3} height={10} width={100} />
          </View>
          <View style={styles.titleView}>
            <Text style={[styles.title, { color: colors.text }]}>
              Default ProgressBar with varying height,width and progress
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <CustomProgressBars progress={10} height={20} width={200} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
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
