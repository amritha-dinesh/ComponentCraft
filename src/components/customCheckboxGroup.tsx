import React, { useState } from "react";
import { View, ColorValue, ImageSourcePropType } from "react-native";
import CustomCheckBox from "./checkbox/customCheckbox";

interface CustomCheckboxGroupProps {
  onClick?: (item: CustomCheckBoxProps, value: boolean, index: number) => void;
  mode?: "single" | "multi";
  Checkboxes: CustomCheckBoxProps[];
}

interface CustomCheckBoxProps {
  testID?: string;
  label?: string;
  value?: boolean;
  onValueChanged?: (value: boolean) => void;
  disabled?: boolean;
  labelColor?: ColorValue;
  fillColor?: ColorValue;
  disabledColor?: ColorValue;
  labelFontSize?: number;
  spaceBetweenLabelAndCheckBox?: number;
  checkedImage?: ImageSourcePropType;
  unCheckedImage?: ImageSourcePropType;
  size?: number;
  labelFontFamily?: string | undefined;
  position?: "left" | "right";
}

const CustomCheckboxGroup: React.FC<CustomCheckboxGroupProps> = ({
  mode = "single",
  onClick = () => {
    "true";
  },
  Checkboxes = [],
}) => {
  const [listOfCheckboxes, setListOfCheckboxes] = useState(Checkboxes);

  const handlingCheckboxClick = (
    checkboxItem: CustomCheckBoxProps,
    index: number
  ) => (
    <CustomCheckBox
      {...checkboxItem}
      value={checkboxItem.value}
      onValueChanged={(value) => {
        const listOfCheckboxesCopy = [...listOfCheckboxes];
        if (mode === "multi") {
          listOfCheckboxesCopy[index].value = value;
          console.log("MultiModified", JSON.stringify(listOfCheckboxesCopy));
          setListOfCheckboxes(listOfCheckboxesCopy);
        } else {
          listOfCheckboxesCopy.forEach((item) => (item.value = false));
          listOfCheckboxesCopy[index].value = value;
          console.log("SingleModified", JSON.stringify(listOfCheckboxesCopy));
          setListOfCheckboxes(listOfCheckboxesCopy);
        }
        onClick(checkboxItem, value, index);
      }}
    />
  );

  return (
    <View>
      {listOfCheckboxes.map(
        (checkboxItem: CustomCheckBoxProps, index: number) =>
          handlingCheckboxClick(checkboxItem, index)
      )}
    </View>
  );
};

export default CustomCheckboxGroup;
