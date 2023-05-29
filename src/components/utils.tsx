export type ButtonMode = "text" | "contained";
type BaseProps = {
  isMode: (mode: ButtonMode) => boolean;
  disabled?: boolean;
  color?: string;
  buttonColor?: string;
};
export const getButtonColors = ({
  mode,
  buttonColor,
  color,
  disabled,
}: {
  mode: ButtonMode;
  buttonColor?: string;
  color?: string;
  disabled?: boolean;
}) => {
  const isMode = (modeToCompare: ButtonMode) => {
    return mode === modeToCompare;
  };

  const getButtonBackgroundColor = ({
    disabled,
    buttonColor,
    isMode,
  }: BaseProps) => {
    if (buttonColor && !disabled && !isMode("text")) {
      return buttonColor;
    } else {
      return "transparent";
    }
  };

  const backgroundColor = getButtonBackgroundColor({
    isMode,
    disabled,
    buttonColor,
  });

  const getButtonTextColor = ({
    disabled,
    color,
  }: Omit<BaseProps, "isMode">) => {
    if (color && !disabled) {
      return color;
    } else {
      return "#000000";
    }
  };
  const textColor = getButtonTextColor({
    disabled,
    color,
  });
  const getButtonBorderColor = ({ isMode, disabled }: BaseProps) => {
    if (disabled && isMode("text")) {
      return "transparent";
    } else {
      return "gray";
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