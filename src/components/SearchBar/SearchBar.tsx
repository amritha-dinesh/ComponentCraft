/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";
import { grey1100, grey200, grey500 } from "../../styles/themes/colors";
import { useTheme } from "@react-navigation/native";
import Text from "../CustomText/CText";

interface SearchBarProps {
  platform?: "default" | "ios" | "android";
  clearIcon?: any;
  searchIcon?: any;
  cancelIcon?: any;
  containerStyle?: any;
  inputContainerStyle?: any;
  inputStyle?: any;
  leftIconContainerStyle?: any;
  rightIconContainerStyle?: any;
  lightTheme?: boolean;
  loadingProps?: any;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
  onSubmit?: () => void;
  placeholder?: string;
  placeholderTextColor?: string;
  round?: boolean;
  showCancel?: boolean;
  showLoading?: boolean;
  underlineColorAndroid?: string;
  cancelButtonTitle?: string;
  cancelButtonProps?: any;
  onCancel?: () => void;
  searchText?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  platform = "default",
  clearIcon,
  searchIcon,
  cancelIcon,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  leftIconContainerStyle,
  rightIconContainerStyle,
  lightTheme,
  loadingProps,
  onChangeText,
  onClear,
  onSubmit,
  placeholder,
  placeholderTextColor,
  round,
  showCancel,
  showLoading,
  underlineColorAndroid,
  cancelButtonTitle,
  cancelButtonProps,
  onCancel,
  searchText,
}) => {
  const [inputValue, setInputValue] = React.useState(searchText || "");
  const { colors } = useTheme();

  const handleSearchTextChange = (text: string) => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleSearchSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  const handleClearSearch = () => {
    setInputValue("");
    if (onClear) {
      onClear();
    }
  };

  const handleCancel = () => {
    setInputValue("");
    if (onCancel) {
      onCancel();
    }
  };

  const renderIcon = (icon: any, onPress: () => void, style: any) => {
    if (icon) {
      return (
        <TouchableOpacity onPress={onPress} style={style}>
          <Image
            style={[styles.icon, { tintColor: colors.text }]}
            source={icon}
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderLoadingIndicator = () => {
    if (showLoading) {
      return <ActivityIndicator size="small" color="#888" {...loadingProps} />;
    }
    return null;
  };

  const renderCancelButton = () => {
    if (showCancel && platform === "ios") {
      return (
        <TouchableOpacity
          testID="cancel-button"
          onPress={handleCancel}
          style={styles.cancelButton}
          {...cancelButtonProps}
        >
          <Text style={{ color: colors.text }}>{cancelButtonTitle}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderClearButton = () => {
    if (searchText && clearIcon) {
      return renderIcon(clearIcon, handleClearSearch, [
        styles.icon,
        styles.clearIcon,
      ]);
    }
    return null;
  };

  const renderSearchIcon = () => {
    if (!searchText && searchIcon) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return renderIcon(searchIcon, () => {}, styles.icon);
    }
    return null;
  };

  const renderLeftIconContainer = () => (
    <View style={[styles.leftIconContainer, leftIconContainerStyle]}>
      {renderSearchIcon()}
      {renderLoadingIndicator()}
    </View>
  );

  const renderRightIconContainer = () => (
    <View style={[styles.rightIconContainer, rightIconContainerStyle]}>
      {renderClearButton()}
      {platform === "android" && cancelIcon && (
        <TouchableOpacity onPress={handleCancel} style={styles.icon}>
          <Image source={cancelIcon} style={{ tintColor: colors.text }} />
        </TouchableOpacity>
      )}
    </View>
  );

  const renderInput = () => (
    <TextInput
      testID="search-input"
      style={[
        styles.input,
        // eslint-disable-next-line react-native/no-inline-styles
        Platform.OS === "web" && {
          outlineWidth: 0,
        },
        { color: colors.text },
        inputStyle,
      ]}
      value={inputValue}
      onChangeText={handleSearchTextChange}
      onSubmitEditing={handleSearchSubmit}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      underlineColorAndroid={underlineColorAndroid}
    />
  );

  return (
    <View testID="search-bar" style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          lightTheme
            ? styles.lightTheme
            : { backgroundColor: colors.background },
          round && styles.roundInputContainer,
        ]}
      >
        {renderLeftIconContainer()}
        {renderInput()}
        {renderRightIconContainer()}
      </View>
      {renderCancelButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: grey200,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  lightTheme: {
    backgroundColor: grey1100,
  },
  leftIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  rightIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  icon: {
    width: 24,
    height: 24,
    opacity: 0.7,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  roundInputContainer: {
    borderRadius: 20,
  },
  clearIcon: {
    tintColor: grey500,
  },
  cancelButton: {
    marginLeft: 8,
  },
});

export default SearchBar;
