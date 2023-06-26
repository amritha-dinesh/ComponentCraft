import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { white, lightBlue500 } from "../../utils/themes/colors";
import { CText } from "component-craft";
type Props = React.ComponentPropsWithRef<typeof Text> & {};

const CustomText = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={styles.white}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Mode's of Text</Text>
        </View>
        <View style={styles.paddingTop}>
          <CText textType="primaryBold" style={{ padding: 5 }}>
            primary Bold
          </CText>{" "}
          <CText textType="primaryNormal" style={{ padding: 5 }}>
            primary Normal
          </CText>{" "}
          <CText textType="primary" style={{ padding: 5 }}>
            primary
          </CText>{" "}
          <CText textType="primaryLight" style={{ padding: 5 }}>
            primary Light
          </CText>{" "}
          <CText textType="secondaryBold" style={{ padding: 5 }}>
            secondary Bold
          </CText>{" "}
          <CText textType="secondaryNormal" style={{ padding: 5 }}>
            secondary Normal
          </CText>{" "}
          <CText textType="secondary" style={{ padding: 5 }}>
            secondary
          </CText>{" "}
          <CText textType="secondaryLight" style={{ padding: 5 }}>
            secondary Light
          </CText>{" "}
          <CText textType="successBold" style={{ padding: 5 }}>
            success Bold
          </CText>{" "}
          <CText textType="successNormal" style={{ padding: 5 }}>
            success Normal
          </CText>{" "}
          <CText textType="success" style={{ padding: 5 }}>
            success
          </CText>{" "}
          <CText textType="successLight" style={{ padding: 5 }}>
            success Light
          </CText>{" "}
          <CText textType="warningBold" style={{ padding: 5 }}>
            warning Bold
          </CText>{" "}
          <CText textType="warningNormal" style={{ padding: 5 }}>
            warning Normal
          </CText>{" "}
          <CText textType="warning" style={{ padding: 5 }}>
            warning
          </CText>{" "}
          <CText textType="warningLight" style={{ padding: 5 }}>
            warning Light
          </CText>{" "}
          <CText textType="errorBold" style={{ padding: 5 }}>
            error Bold
          </CText>{" "}
          <CText textType="errorNormal" style={{ padding: 5 }}>
            error Normal
          </CText>{" "}
          <CText textType="error" style={{ padding: 5 }}>
            error
          </CText>{" "}
          <CText textType="errorLight" style={{ padding: 5 }}>
            error Light
          </CText>{" "}
          <CText textType="bold" style={{ padding: 5 }}>
            bold
          </CText>{" "}
          <CText textType="normal" style={{ padding: 5 }}>
            normal
          </CText>{" "}
          <CText textType="light" style={{ padding: 5 }}>
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
