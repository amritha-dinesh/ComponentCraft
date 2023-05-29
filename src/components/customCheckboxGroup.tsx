import React, { useState } from "react";
import { View } from "react-native";
import CustomCheckBox from "./customCheckbox";

const CustomCheckboxGroup = () => {
  const [listOfCheckboxes, setListOfCheckboxes] = useState([
    { label: "Java", disabled: true },
    { label: "Kotlin" },
  ]);

  return (
    <View>
      {listOfCheckboxes.map((checkboxItem) => {
        return <CustomCheckBox {...checkboxItem} />;
      })}
    </View>
  );
};

export default CustomCheckboxGroup;
