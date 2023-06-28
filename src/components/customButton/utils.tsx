export type ButtonMode = "text" | "contained" | "outlined";

type BaseProps = {
  isMode: (mode: ButtonMode) => boolean;
  disabled?: boolean;
  color?: string;
  buttonColor?: string;
  disabledButtonColor?: string;
  outlinedColor?: string;
  borderColor?: string;
};
export const getButtonColors = ({
  mode,
  buttonColor,
  color,
  disabled,
  disabledButtonColor,
}: {
  mode: ButtonMode;
  buttonColor?: string;
  color?: string;
  disabled?: boolean;
  disabledButtonColor?: string;
  outlinedColor?: string;
}) => {
  const isMode = (modeToCompare: ButtonMode) => mode === modeToCompare;

  const getButtonBackgroundColor = ({
    disabled,
    buttonColor,
    isMode,
    disabledButtonColor,
  }: BaseProps) => {
    if (isMode("outlined") || isMode("text")) {
      return "transparent";
    }
    if (buttonColor && !disabled) {
      return buttonColor;
    }
    if (isMode("contained") && disabledButtonColor && disabled) {
      return disabledButtonColor;
    }
  };

  const backgroundColor = getButtonBackgroundColor({
    isMode,
    disabled,
    buttonColor,
    disabledButtonColor,
  });

  const getButtonTextColor = ({
    disabled,
    color,
  }: Omit<BaseProps, "isMode">) => {
    if (color && !disabled) {
      return color;
    } else {
      return null;
    }
  };
  const textColor = getButtonTextColor({
    disabled,
    color,
  });
  const getButtonBorderColor = ({
    isMode,
    disabled,
    borderColor,
  }: BaseProps) => {
    if (disabled && isMode("text")) {
      return "transparent";
    }
    if (isMode("outlined") && isMode("contained")) {
      return borderColor;
    }
  };
  const borderColor = getButtonBorderColor({ isMode, disabled });
  const getButtonBorderWidth = ({ isMode }: Omit<BaseProps, "disabled">) => {
    if (isMode("text")) {
      return 0;
    } else {
      return 1;
    }
  };

  const borderWidth = getButtonBorderWidth({ isMode });
  const getButtonBorderRadius = ({ isMode }: Omit<BaseProps, "disabled">) => {
    if (isMode("text")) {
      return 0;
    } else {
      return 5;
    }
  };

  const borderRadius = getButtonBorderRadius({ isMode });

  return {
    backgroundColor,
    borderColor,
    textColor,
    borderWidth,
    borderRadius,
  };
};
