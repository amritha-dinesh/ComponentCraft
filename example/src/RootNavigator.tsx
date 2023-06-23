/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from "react";
import { Image, TouchableOpacity } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleList from "./Examples/ExampleList";
import CustomInput from "./Examples/customInput/customInput";
import CustomCheckBox from "./Examples/checkbox/customCheckbox";
import CustomButton from "./Examples/customButton/customButton";
import Switch from "./Examples/Switch/Switch";
import CustomSearchBar from "./Examples/SearchBar/SearchBar";
import CustomCard from "./Examples/customCard/customCard";

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
          source={require("../assets/backIcon.png")}
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
        <Stack.Screen name="CustomCard" component={CustomCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
