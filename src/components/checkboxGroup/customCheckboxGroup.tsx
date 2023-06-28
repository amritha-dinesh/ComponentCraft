import React, { useState } from "react";
import { View, ColorValue, ImageSourcePropType } from "react-native";
import { useTheme } from "@react-navigation/native";
import CustomCheckBox from "../checkbox/customCheckbox";

interface CustomCheckboxGroupProps {
  testID?: string;
  onClick?: (item: CustomCheckBoxProps, value: boolean, index: number) => void;
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
  testID = "custom-checkbox-group",
  onClick = () => {
    "true";
  },
  Checkboxes = [],
}) => {
  const [listOfCheckboxes, setListOfCheckboxes] = useState(Checkboxes);
  const { colors } = useTheme();

  const handlingCheckboxClick = (
    checkboxItem: CustomCheckBoxProps,
    index: number
  ) => (
    <CustomCheckBox
      labelColor={colors.background}
      key={index}
      {...checkboxItem}
      value={checkboxItem.value}
      onValueChanged={(value) => {
        const listOfCheckboxesCopy = [...listOfCheckboxes];
        listOfCheckboxesCopy[index].value = value;
        setListOfCheckboxes(listOfCheckboxesCopy);
        onClick(checkboxItem, value, index);
      }}
    />
  );

  return (
    <View testID={testID}>
      {listOfCheckboxes.map(
        (checkboxItem: CustomCheckBoxProps, index: number) =>
          handlingCheckboxClick(checkboxItem, index)
      )}
    </View>
  );
};

export default CustomCheckboxGroup;
