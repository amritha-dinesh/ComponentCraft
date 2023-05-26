import { Platform } from 'react-native';

import {
  grey800,
  grey50,
  white,
} from '../../styles/themes/v2/colors';

type BaseProps = {
  disabled?: boolean;
  value?: boolean;
};

const getCheckedColor = ({
  color,
}: {
  color?: string;
}) => {
  if (color) {
    return color;
  }
};

const getThumbTintColor = ({
  disabled,
  value,
  checkedColor,
}: BaseProps & { checkedColor?: string }) => {
  const isIOS = Platform.OS === 'ios';

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

const getOnTintColor = ({
  disabled,
  value,
  checkedColor,
}: BaseProps & { checkedColor?: string }) => {
  const isIOS = Platform.OS === 'ios';

  if (isIOS) {
    return checkedColor;
  }

  if (disabled) {
    return white;
  }

  if (value) {
    return checkedColor;
  }
  return 'rgb(178, 175, 177)';
};

export const getSwitchColor = ({
  disabled,
  value,
  color,
}: BaseProps & { color?: string }) => {
  const checkedColor = getCheckedColor({color});

  return {
    onTintColor: getOnTintColor({ disabled, value, checkedColor }),
    thumbTintColor: getThumbTintColor({ disabled, value, checkedColor }),
    checkedColor,
  };
};