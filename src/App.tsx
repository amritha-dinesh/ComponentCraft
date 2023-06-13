/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { View } from "react-native";
import CustomCheckboxGroup from "./components/customCheckboxGroup";
function App(): JSX.Element {
  const listOfCheckboxes = [
    { label: "Java", value: false },
    { label: "Kotlin", value: false },
  ];

  return (
    <View>
      <CustomCheckboxGroup
        mode="single"
        Checkboxes={listOfCheckboxes}
        onClick={(item, value, index) => {
          console.log(item, value, index);
        }}
      />
    </View>
  );
}

export default App;
