import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import { grey1050 } from "../../styles/themes/colors";
import { useTheme } from "@react-navigation/native";

interface DropdownProps {
  options: string[];
  multiSelect?: boolean;
  selectedItemColor?: string;
  selectedItemIconColor?: string;
  defaultOption?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  multiSelect,
  selectedItemColor,
  selectedItemIconColor,
  defaultOption,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();

  const toggleDropdown = () => {
    if (isOpen) {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const selectOption = (option: string) => {
    if (multiSelect) {
      // Toggle selection in multi-select mode
      const isSelected = selectedOptions.includes(option);
      let updatedSelection: string[];
      if (isSelected) {
        updatedSelection = selectedOptions.filter((item) => item !== option);
      } else {
        updatedSelection = [...selectedOptions, option];
      }
      setSelectedOptions(updatedSelection);
    } else {
      // Select only one option in single-select mode
      setSelectedOptions([option]);
      toggleDropdown();
    }
  };

  const dropdownHeight = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, options.length * 40], // Adjust the item height (40) based on your preference
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={[styles.selectedOption, { color: colors.text }]}>
          {selectedOptions.length === 0
            ? defaultOption
            : selectedOptions.join(", ")}
        </Text>

        <Image
          testID="dropdown-image"
          source={
            isOpen
              ? require("../../assets/up-arrow.png")
              : require("../../assets/down-arrow.png")
          }
          style={[styles.dropdownIcon, { tintColor: colors.text }]}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {isOpen && (
        <Animated.View
          style={[styles.dropdownList, { height: dropdownHeight }]}
        >
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.dropdownItem,
                { backgroundColor: colors.background },
                selectedOptions.includes(option) && {
                  backgroundColor: selectedItemColor
                    ? selectedItemColor
                    : colors.primary,
                },
              ]}
              onPress={() => selectOption(option)}
            >
              <Text style={{ color: colors.text }}>{option}</Text>
              {selectedOptions.includes(option) && (
                <Image
                  source={require("../../assets/enabled.png")}
                  style={[
                    styles.checkIcon,
                    {
                      tintColor: selectedItemIconColor
                        ? selectedItemIconColor
                        : colors.text,
                    },
                  ]}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          ))}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    marginBottom: 20,
  },
  dropdownHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: grey1050,
    borderRadius: 5,
  },
  selectedOption: {
    flex: 1,
    marginRight: 10,
  },
  dropdownIcon: {
    width: 25,
    height: 25,
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: grey1050,
    borderRadius: 5,
    overflow: "hidden",
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    height: 40,
  },
  checkIcon: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
});

export default Dropdown;
