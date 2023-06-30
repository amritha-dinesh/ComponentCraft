/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from "react";
import { Image, TouchableOpacity, View, Text, Platform } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleList from "./Examples/ExampleList";
import CustomInput from "./Examples/customInput/customInput";
import CustomCheckBox from "./Examples/checkbox/customCheckbox";
import CustomButton from "./Examples/customButton/customButton";
import Switch from "./Examples/Switch/Switch";
import CustomSearchBar from "./Examples/SearchBar/SearchBar";
import CustomCard from "./Examples/customCard/customCard";
import CustomDialog from "./Examples/customDialog/customDialog";
import Skeleton from "./Examples/Skeleton/skeleton";
import CustomText from "./Examples/customText/customText";
import CustomProgressBar from "./Examples/customProgressBar/customProgressBar";
import Dropdown from "./Examples/Dropdown/Dropdown";
import CustomRadioButtonGroup from "./Examples/customRadioButtonGroup/customRadioButtonGroup";
import { black, white } from "./utils/themes/colors";

//custom themes from example app
// import { theme } from "./utils/themes";

//default themes form component-craft
import { darkTheme, lightTheme } from "component-craft";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const CustomHeaderLeft = (props) => {
    const navigation = useNavigation();
    const onPress = props?.onPress;

    const handlePress = () => {
      if (onPress) {
        onPress();
      } else {
        navigation.goBack();
      }
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("../assets/backIcon.png")}
          style={{
            width: 24,
            height: 24,
            tintColor: toggle ? white : black,
          }}
        />
      </TouchableOpacity>
    );
  };

  const [toggle, setToggle] = React.useState(false);

  return (
    <NavigationContainer theme={toggle ? darkTheme : lightTheme}>
      <Stack.Navigator
        initialRouteName="ExampleList"
        screenOptions={({ route }) => ({
          headerLeft:
            route.name !== "ExampleList"
              ? (props) => (
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: Platform.OS === "ios" ? 0 : 20,
                    }}
                  >
                    <CustomHeaderLeft {...props} />
                  </View>
                )
              : undefined,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginRight: Platform.OS === "ios" ? 0 : 30,
              }}
            >
              <Text
                style={{
                  paddingRight: 15,
                  color: toggle ? white : black,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {toggle ? "Dark" : "Light"}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setToggle(!toggle);
                }}
              >
                <Image
                  source={
                    toggle
                      ? require("../assets/toggleOn.png")
                      : require("../assets/toggleOff.png")
                  }
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: toggle ? black : white,
          },
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name="ExampleList" component={ExampleList} />
        <Stack.Screen name="CustomCheckBox" component={CustomCheckBox} />
        <Stack.Screen name="CustomButton" component={CustomButton} />
        <Stack.Screen name="CustomInput" component={CustomInput} />
        <Stack.Screen name="CustomSwitch" component={Switch} />
        <Stack.Screen name="CustomSearchBar" component={CustomSearchBar} />
        <Stack.Screen name="CustomCard" component={CustomCard} />
        <Stack.Screen name="CustomDialog" component={CustomDialog} />
        <Stack.Screen name="Skeleton" component={Skeleton} />
        <Stack.Screen name="CustomText" component={CustomText} />
        <Stack.Screen name="Dropdown" component={Dropdown} />
        <Stack.Screen
          name="CustomRadioButtonGroup"
          component={CustomRadioButtonGroup}
        />
        <Stack.Screen name="CustomProgressBar" component={CustomProgressBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
