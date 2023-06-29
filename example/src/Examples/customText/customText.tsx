import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { black, grey400, white } from "../../utils/themes/colors";
import { CText } from "component-craft";
type Props = React.ComponentPropsWithRef<typeof Text> & object;

const CustomText = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={{ backgroundColor: grey400 }}>
      <View style={[styles.container, { backgroundColor: grey400 }]}>
        <View style={styles.titleView}>
          <Text style={[styles.title, { color: black }]}>Mode's of Text</Text>
        </View>
        <View style={styles.paddingTop}>
          <CText variant="headingLarge" style={styles.padding}>
            text color based on Theme
          </CText>
          <CText
            variant="headingLarge"
            textType="primaryBold"
            style={styles.padding}
          >
            headingLarge & primary Bold
          </CText>
          <CText
            variant="headingNormal"
            textType="primaryNormal"
            style={styles.padding}
          >
            headingNormal & primary Normal
          </CText>
          <CText variant="heading" textType="primary" style={styles.padding}>
            heading & primary
          </CText>
          <CText
            variant="headingSmall"
            textType="primaryLight"
            style={styles.padding}
          >
            headingSmall & primary Light
          </CText>
          <CText
            variant="subHeadingLarge"
            textType="secondaryBold"
            style={styles.padding}
          >
            subHeadingLarge & secondary Bold
          </CText>
          <CText
            variant="subHeadingNormal"
            textType="secondaryNormal"
            style={styles.padding}
          >
            subHeadingNormal & secondary Normal
          </CText>
          <CText
            variant="subHeading"
            textType="secondary"
            style={styles.padding}
          >
            subHeading & secondary
          </CText>
          <CText
            variant="subHeadingSmall"
            textType="secondaryLight"
            style={styles.padding}
          >
            subHeadingSmall & secondary Light
          </CText>
          <CText
            variant="bodyLarge"
            textType="successBold"
            style={styles.padding}
          >
            bodyLarge & success Bold
          </CText>
          <CText
            variant="bodyNormal"
            textType="successNormal"
            style={styles.padding}
          >
            bodyNormal & success Normal
          </CText>
          <CText variant="body" textType="success" style={styles.padding}>
            body & success
          </CText>
          <CText
            variant="bodySmall"
            textType="successLight"
            style={styles.padding}
          >
            bodySmall & success Light
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
