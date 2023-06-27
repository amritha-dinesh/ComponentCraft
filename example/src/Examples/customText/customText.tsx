import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { white } from "../../utils/themes/colors";
import { CText } from "component-craft";
type Props = React.ComponentPropsWithRef<typeof Text> & object;

const CustomText = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={styles.white}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Mode's of Text</Text>
        </View>
        <View style={styles.paddingTop}>
          <CText textType="primaryBold" style={styles.padding}>
            primary Bold
          </CText>
          <CText textType="primaryNormal" style={styles.padding}>
            primary Normal
          </CText>
          <CText textType="primary" style={styles.padding}>
            primary
          </CText>
          <CText textType="primaryLight" style={styles.padding}>
            primary Light
          </CText>
          <CText textType="secondaryBold" style={styles.padding}>
            secondary Bold
          </CText>
          <CText textType="secondaryNormal" style={styles.padding}>
            secondary Normal
          </CText>
          <CText textType="secondary" style={styles.padding}>
            secondary
          </CText>
          <CText textType="secondaryLight" style={styles.padding}>
            secondary Light
          </CText>
          <CText textType="successBold" style={styles.padding}>
            success Bold
          </CText>
          <CText textType="successNormal" style={styles.padding}>
            success Normal
          </CText>
          <CText textType="success" style={styles.padding}>
            success
          </CText>
          <CText textType="successLight" style={styles.padding}>
            success Light
          </CText>
          <CText textType="warningBold" style={styles.padding}>
            warning Bold
          </CText>
          <CText textType="warningNormal" style={styles.padding}>
            warning Normal
          </CText>
          <CText textType="warning" style={styles.padding}>
            warning
          </CText>
          <CText textType="warningLight" style={styles.padding}>
            warning Light
          </CText>
          <CText textType="errorBold" style={styles.padding}>
            error Bold
          </CText>
          <CText textType="errorNormal" style={styles.padding}>
            error Normal
          </CText>
          <CText textType="error" style={styles.padding}>
            error
          </CText>
          <CText textType="errorLight" style={styles.padding}>
            error Light
          </CText>
          <CText textType="bold" style={styles.padding}>
            bold
          </CText>
          <CText textType="normal" style={styles.padding}>
            normal
          </CText>
          <CText textType="light" style={styles.padding}>
            light
          </CText>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default CustomText;
CustomText.title = "Text";

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
  padding: {
    padding: 5,
  },
});
