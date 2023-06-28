import { TextStyle } from "react-native";
import { colors } from "../../styles/themes/colors";

export const TextTypesPossible = [
  "primaryLight",
  "primaryNormal",
  "primaryBold",
  "primary",
  "secondaryLight",
  "secondaryNormal",
  "secondaryBold",
  "secondary",
  "successLight",
  "successNormal",
  "successBold",
  "success",
  "errorLight",
  "errorNormal",
  "errorBold",
  "error",
  "warningLight",
  "warningNormal",
  "warningBold",
  "warning",
  "light",
  "normal",
  "bold",
] as const;

export const TextTypes: {
  [key in (typeof TextTypesPossible)[number]]: TextStyle;
} = {
  primaryLight: {
    color: colors.blue300,
  },
  primaryNormal: {
    color: colors.blue600,
  },
  primaryBold: {
    color: colors.blue800,
  },
  primary: {
    color: colors.blue600,
  },

  secondaryLight: {
    color: colors.grey500,
  },
  secondaryNormal: {
    color: colors.grey700,
  },
  secondaryBold: {
    color: colors.grey900,
  },
  secondary: {
    color: colors.grey700,
  },

  successLight: {
    color: colors.green300,
  },
  successNormal: {
    color: colors.green600,
  },
  successBold: {
    color: colors.green900,
  },
  success: {
    color: colors.green600,
  },

  errorLight: {
    color: colors.red300,
  },
  errorNormal: {
    color: colors.red600,
  },
  errorBold: {
    color: colors.red900,
  },
  error: {
    color: colors.red600,
  },

  warningLight: {
    color: colors.yellow300,
  },
  warningNormal: {
    color: colors.yellow600,
  },
  warningBold: {
    color: colors.yellow800,
  },
  warning: {
    color: colors.yellow600,
  },

  light: {
    color: colors.grey400,
  },
  normal: {
    color: colors.grey700,
  },
  bold: {
    color: colors.black,
  },
};

export const TextOverflowModeStyles: {
  [key: string]: "clip" | "head" | "middle" | "tail";
} = {
  clipTheEnd: "clip",
  ignoreTheStart: "head",
  ignoreTheMiddle: "middle",
  ignoreTheEnd: "tail",
};
