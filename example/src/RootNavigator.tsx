/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";

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
//import { useColorScheme } from "react-native";
import { theme } from "./utils/themes";
import { black, white } from "./utils/themes/colors";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  //const scheme = useColorScheme();
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

  //console.log("scheme", scheme);
  const [toggle, setToggle] = React.useState(false);

  return (
    <NavigationContainer theme={toggle ? theme.dark : theme.light}>
      <Stack.Navigator
        initialRouteName="ExampleList"
        screenOptions={({ route }) => ({
          headerLeft:
            route.name !== "ExampleList"
              ? (props) => (
                  <View style={{ flexDirection: "row" }}>
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
              }}
            >
              <Text style={{ paddingRight: 10, color: toggle ? white : black }}>
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
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: toggle ? black : white,
          },
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
