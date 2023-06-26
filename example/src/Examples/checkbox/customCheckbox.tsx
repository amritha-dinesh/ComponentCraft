import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { CustomCheckBox as CustomCheckBoxs } from "component-craft";
type Props = React.ComponentPropsWithRef<typeof Text> & {};

const CustomCheckBox = ({}: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView style={styles.whiteColor}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            Check box with label position & Enabled
          </Text>
        </View>
        <View style={styles.padding}>
          <CustomCheckBoxs position="left" label="Left Position" />
          <CustomCheckBoxs position="right" label="Right Position" />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Modes of Check box</Text>
        </View>
        <View style={styles.padding}>
          <CustomCheckBoxs label="Enabled" />
          <CustomCheckBoxs value={true} disabled label="Disabled" />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Check box without Label</Text>
        </View>
        <View style={styles.padding}>
          <CustomCheckBoxs value={true} label="" />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Check box in different size</Text>
        </View>
        <View style={styles.padding}>
          <CustomCheckBoxs size={25} label="small" labelFontSize={12} />
          <View style={styles.paddingTop}>
            <CustomCheckBoxs size={30} label="medium" labelFontSize={13} />
          </View>
          <View style={styles.paddingTop}>
            <CustomCheckBoxs size={40} label="large" />
          </View>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>Check box - Value changes</Text>
        </View>
        <View style={styles.padding}>
          <CustomCheckBoxs
            onValueChanged={() => setChecked(!checked)}
            size={40}
            label={checked ? "Active" : "Inactive"}
          />
        </View>

        <View style={styles.titleView}>
          <Text style={styles.title}>Check box in different color</Text>
        </View>
        <View style={styles.padding}>
          <CustomCheckBoxs
            labelColor={"green"}
            fillColor={"green"}
            value
            label="green"
          />
        </View>
        <View style={styles.padding}>
          <CustomCheckBoxs
            labelColor={"skyblue"}
            fillColor={"skyblue"}
            value
            label="skyblue"
          />
        </View>
        <View style={styles.padding}>
          <CustomCheckBoxs
            labelColor={"orange"}
            fillColor={"orange"}
            value
            label="orange"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
CustomCheckBox.title = "CheckBox";

export default CustomCheckBox;
const styles = StyleSheet.create({
  titleView: {
    paddingTop: 15,
    left: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  whiteColor: {
    backgroundColor: "white",
  },
  padding: {
    padding: "5%",
  },
  paddingTop: {
    paddingTop: "2%",
  },
});
