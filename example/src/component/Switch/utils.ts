import { Platform } from "react-native";

import { grey800, grey50, white } from "../../themes/colors";

type BaseProps = {
  disabled?: boolean;
  value?: boolean;
};

const getCheckedColor = ({ color }: { color?: string }) => {
  if (color) {
    return color;
  }
};

/**
   This function calculates the color value for the thumb of the toggle button.
 disabled: If the toggle button is disabled, it returns the color grey800.
 value: If the toggle button is enabled (value is true), it returns the checkedColor provided as an argument.
 Default: If none of the above conditions are met, it returns the color grey50.
 For iOS, the function returns undefined, as iOS does not use a separate color for the thumb.
  */

const getThumbTintColor = ({
  disabled,
  value,
  checkedColor,
}: BaseProps & { checkedColor?: string }) => {
  const isIOS = Platform.OS === "ios";

  if (isIOS) {
    return undefined;
  }

  if (disabled) {
    return grey800;
  }

  if (value) {
    return checkedColor;
  }
  return grey50;
};

/**
 * This function calculates the color value for the track (onTintColor) of the toggle button.
disabled: If the toggle button is disabled, it returns the color white.
value: If the toggle button is enabled (value is true), it returns the checkedColor provided as an argument.
Default: If none of the above conditions are met, it returns the color "rgb(178, 175, 177)".
For iOS, the function returns the checkedColor provided as an argument.
 */

const getOnTintColor = ({
  disabled,
  value,
  checkedColor,
}: BaseProps & { checkedColor?: string }) => {
  const isIOS = Platform.OS === "ios";

  if (isIOS) {
    return checkedColor;
  }

  if (disabled) {
    return white;
  }

  if (value) {
    return checkedColor;
  }
  return "rgb(178, 175, 177)";
};

export const getSwitchColor = ({
  disabled,
  value,
  color,
}: BaseProps & { color?: string }) => {
  const checkedColor = getCheckedColor({ color });

  return {
    onTintColor: getOnTintColor({ disabled, value, checkedColor }),
    thumbTintColor: getThumbTintColor({ disabled, value, checkedColor }),
    checkedColor,
  };
};
