import * as React from "react";
import {
  NativeModules,
  Platform,
  StyleProp,
  Switch as NativeSwitch,
  ViewStyle,
} from "react-native";

import { getSwitchColor } from "./utils";

const version = NativeModules.PlatformConstants
  ? NativeModules.PlatformConstants.reactNativeVersion
  : undefined;

export type Props = React.ComponentPropsWithRef<typeof NativeSwitch> & {
  /**
   * Disable toggling the switch.
   */
  disabled?: boolean;
  /**
   * Value of the switch, true means 'on', false means 'off'.
   */
  value?: boolean;
  /**
   * Custom color for switch.
   */
  color?: string;
  /**
   * Callback called with the new value when it changes.
   */
  onValueChange?: Function;
  style?: StyleProp<ViewStyle>;
  /**
   * Accessibility label for the switch.
   */
  accessibilityLabel?: string;
};

const CustomSwitch = ({
  value,
  disabled,
  onValueChange,
  color,
  ...rest
}: Props) => {
  const { checkedColor, onTintColor, thumbTintColor } = getSwitchColor({
    disabled,
    value,
    color,
  });

  const props =
    version && version.major === 0 && version.minor <= 56
      ? {
          onTintColor,
          thumbTintColor,
        }
      : Platform.OS === "web"
      ? {
          activeTrackColor: onTintColor,
          thumbColor: thumbTintColor,
          activeThumbColor: checkedColor,
        }
      : {
          thumbColor: thumbTintColor,
          trackColor: {
            true: onTintColor,
            false: onTintColor,
          },
        };

  return (
    <NativeSwitch
      testID="switch"
      value={value}
      disabled={disabled}
      onValueChange={disabled ? undefined : onValueChange}
      {...props}
      {...rest}
    />
  );
};
CustomSwitch.title = "CustomSwitch";

export default CustomSwitch;
