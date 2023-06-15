/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from "react";
import { Image, TouchableOpacity } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleList from "./component/ExampleList";
import CustomInput from "./component/customInput/customInput";
import CustomCheckBox from "./component/checkbox/customCheckbox";
import CustomButton from "./component/customButton/customButton";
import Switch from "./component/Switch/Switch";
import CustomSearchBar from "./component/SearchBar/SearchBar";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const CustomHeaderLeft = ({ onPress }: any) => {
    const navigation = useNavigation();

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
          source={require("./assets/backIcon.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ExampleList"
        screenOptions={({ route }) => ({
          headerLeft:
            route.name !== "ExampleList"
              ? (props) => <CustomHeaderLeft {...props} />
              : undefined,
        })}
      >
        <Stack.Screen name="ExampleList" component={ExampleList} />
        <Stack.Screen name="CustomCheckBox" component={CustomCheckBox} />
        <Stack.Screen name="CustomButton" component={CustomButton} />
        <Stack.Screen name="CustomInput" component={CustomInput} />
        <Stack.Screen name="CustomSwitch" component={Switch} />
        <Stack.Screen name="CustomSearchBar" component={CustomSearchBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
