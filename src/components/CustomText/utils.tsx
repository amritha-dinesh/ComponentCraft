import { TextStyle } from "react-native";
import { colors } from "../../styles/themes/colors";
import { regularType, boldType } from "../../styles/themes/fonts";

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

export const VariantTypesPossible = [
  "headingLarge",
  "headingNormal",
  "headingSmall",
  "heading",
  "subHeadingLarge",
  "subHeadingNormal",
  "subHeadingSmall",
  "subHeading",
  "bodyLarge",
  "bodyNormal",
  "bodySmall",
  "body",
] as const;

export const VariantTypes: {
  [key in (typeof VariantTypesPossible)[number]]: TextStyle;
} = {
  headingLarge: {
    ...boldType,
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 0,
  },

  headingNormal: {
    ...boldType,
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: 0,
  },

  headingSmall: {
    ...boldType,
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 28,
    letterSpacing: 0,
  },

  heading: {
    ...boldType,
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 32,
    letterSpacing: 0,
  },

  subHeadingLarge: {
    ...regularType,
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: 28,
    letterSpacing: 0,
  },

  subHeadingNormal: {
    ...regularType,
    fontSize: 22,
    fontWeight: "normal",
    lineHeight: 26,
    letterSpacing: 0,
  },

  subHeadingSmall: {
    ...regularType,
    fontSize: 20,
    fontWeight: "normal",
    lineHeight: 24,
    letterSpacing: 0,
  },

  subHeading: {
    ...regularType,
    fontSize: 22,
    fontWeight: "normal",
    lineHeight: 26,
    letterSpacing: 0,
  },

  bodyLarge: {
    ...regularType,
    fontSize: 20,
    fontWeight: "normal",
    lineHeight: 26,
    letterSpacing: 0,
  },

  bodyNormal: {
    ...regularType,
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 22,
    letterSpacing: 0,
  },

  bodySmall: {
    ...regularType,
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 20,
    letterSpacing: 0,
  },

  body: {
    ...regularType,
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 22,
    letterSpacing: 0,
  },
};
