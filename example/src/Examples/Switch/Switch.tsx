import * as React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { Switch } from "component-craft";
import {
  white,
  green500,
  blue500,
  lightBlue500,
  yellow500,
  red500,
  grey300,
  lightGreen300,
  black,
  grey400,
} from "../../utils/themes/colors";

type Props = React.ComponentPropsWithRef<typeof Text> & {
  title?: string;
};

const CustomSwitch = ({}: Props) => {
  const [toggleValue, setToggleValue] = React.useState(false);
  const [toggleValueImage, setToggleValueImage] = React.useState(false);
  const [toggleValueStatus, setToggleValueStatus] = React.useState(false);
  const [toggleValueText, setToggleValueText] = React.useState(false);
  const [toggleValueLoader, setToggleValueLoader] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const [switchStatus, setStatus] = React.useState(false);
  const handleToggle = (value: boolean) => {
    setToggleValue(value);
  };
  const handleToggleStatus = (value: boolean) => {
    setToggleValueStatus(value);
    setStatus(!switchStatus);
  };
  const handleToggleImage = (value: boolean) => {
    setToggleValueImage(value);
  };
  const handleToggleText = (value: boolean) => {
    setToggleValueText(value);
  };
  const handleToggleLoader = (value: boolean) => {
    setIsLoading(true);
    setToggleValueLoader(value);
    setTimeout(() => {
      setToggleValueLoader(value);

      setIsLoading(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={{ backgroundColor: grey400 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mode's of Toggle Switch</Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            value={toggleValue}
            onValueChange={handleToggle}
            content="text"
          />
          <Text style={styles.switchTitle}>
            Coloring based on themes with out providing any custom colors.
          </Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            value={toggleValue}
            onValueChange={handleToggle}
            activeStyle={styles.switchActive}
            inactiveStyle={styles.switchInactive}
            disabledStyle={styles.switchDisabled}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>Default mode</Text>
        </View>
        <View style={styles.paddingLeft}>
          <Switch
            value={toggleValueImage}
            onValueChange={handleToggleImage}
            activeStyle={styles.switchActive}
            inactiveStyle={styles.switchInactive}
            content={"image"}
            disabledStyle={styles.switchDisabled}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>Switch with Image Content</Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            value={toggleValueText}
            onValueChange={handleToggleText}
            activeStyle={styles.switchActive}
            inactiveStyle={styles.switchInactive}
            content={"text"}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>Switch with text Content</Text>
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Switch
            value={toggleValueLoader}
            onValueChange={handleToggleLoader}
            activeStyle={styles.switchActive}
            inactiveStyle={styles.switchInactive}
            disabledStyle={styles.switchDisabled}
            loading={isLoading}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>Switch with Loader</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Toggle Switch in Disable mode</Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            onValueChange={handleToggleLoader}
            value={false}
            indicatorColor={blue500}
            activeStyle={styles.switchActive}
            inactiveStyle={styles.switchInactive}
            disabled
            disabledStyle={styles.switchDisabled}
          />
          <Text style={styles.switchTitle}>Default mode switch disabled</Text>
        </View>
        <View style={styles.paddingLeft}>
          <Switch
            onValueChange={handleToggleLoader}
            value={false}
            disabled
            activeStyle={styles.switchActive}
            inactiveStyle={styles.switchInactive}
            content={"image"}
            disabledStyle={styles.switchDisabled}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>
            Disabled Switch with Image Content
          </Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            onValueChange={handleToggle}
            value={false}
            disabled
            activeStyle={styles.switchActive}
            inactiveStyle={styles.switchInactive}
            content={"text"}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>
            Disabled Switch with text Content
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Toggle Switch - Value changes</Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            value={toggleValueStatus}
            onValueChange={handleToggleStatus}
            activeStyle={styles.switchActive}
            inactiveStyle={styles.switchInactive}
            content={"image"}
            disabledStyle={styles.switchDisabled}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>
            Switch is{" "}
            {switchStatus ? <Text>Active</Text> : <Text>Inactive</Text>}
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Toggle Switch - Different colors</Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            value={toggleValue}
            onValueChange={handleToggle}
            activeStyle={styles.colorGreen}
            inactiveStyle={styles.colorRed}
            disabledStyle={styles.switchDisabled}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>Switch with green & red color</Text>
        </View>
        <View style={styles.paddingLeft}>
          <Switch
            value={toggleValueImage}
            onValueChange={handleToggleImage}
            activeStyle={styles.colorBlue}
            inactiveStyle={styles.colorSkyblue}
            content={"image"}
            disabledStyle={styles.switchDisabled}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>Switch with Blue & sky blue</Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            value={toggleValueText}
            onValueChange={handleToggleText}
            activeStyle={styles.colorYellow}
            inactiveStyle={styles.colorGray}
            content={"text"}
            indicatorColor={lightGreen300}
          />
          <Text style={styles.switchTitle}>Switch with Yellow & gray </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

CustomSwitch.title = "Switch";

export default CustomSwitch;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 15,
    left: 10,
  },
  switchTitle: {
    marginLeft: 10,
    top: 5,
  },
  switchView: {
    padding: "10%",
    flexDirection: "row",
  },
  paddingLeft: {
    paddingLeft: "10%",
    flexDirection: "row",
  },
  paddingBottom: {
    paddingBottom: "5%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  colorGreen: {
    backgroundColor: green500,
  },
  colorRed: {
    backgroundColor: red500,
  },
  colorBlue: {
    backgroundColor: blue500,
  },
  colorSkyblue: {
    backgroundColor: lightBlue500,
  },
  colorYellow: {
    backgroundColor: yellow500,
  },
  colorGray: {
    backgroundColor: grey300,
  },
  switchActive: {
    backgroundColor: lightGreen300,
  },
  switchInactive: {
    backgroundColor: grey300,
  },
  switchDisabled: {
    opacity: 0.5,
  },
});
