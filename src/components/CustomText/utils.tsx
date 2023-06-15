import { TextStyle } from "react-native";

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

export const VariantTypes: {
  [key in (typeof VariantTypesPossible)[number]]: TextStyle;
} = {
  headingLarge: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 36,
    letterSpacing: 0,
  },
  headingNormal: {
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 32,
    letterSpacing: 0,
  },
  headingSmall: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 28,
    letterSpacing: 0,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 32,
    letterSpacing: 0,
  },

  subHeadingLarge: {
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: 28,
    letterSpacing: 0,
  },
  subHeadingNormal: {
    fontSize: 22,
    fontWeight: "normal",
    lineHeight: 26,
    letterSpacing: 0,
  },
  subHeadingSmall: {
    fontSize: 20,
    fontWeight: "normal",
    lineHeight: 24,
    letterSpacing: 0,
  },
  subHeading: {
    fontSize: 22,
    fontWeight: "normal",
    lineHeight: 26,
    letterSpacing: 0,
  },

  bodyLarge: {
    fontSize: 20,
    fontWeight: "normal",
    lineHeight: 26,
    letterSpacing: 0,
  },
  bodyNormal: {
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 22,
    letterSpacing: 0,
  },
  bodySmall: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 20,
    letterSpacing: 0,
  },
  body: {
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 22,
    letterSpacing: 0,
  },
};

export const TextTypes: {
  [key in (typeof TextTypesPossible)[number]]: TextStyle;
} = {
  primaryLight: {
    color: "#B3D4FF",
  },
  primaryNormal: {
    color: "#007BFF",
  },
  primaryBold: {
    color: "#0047B2",
  },
  primary: {
    color: "#007BFF",
  },

  secondaryLight: {
    color: "#A6B1B9",
  },
  secondaryNormal: {
    color: "#6C757D",
  },
  secondaryBold: {
    color: "#465057",
  },
  secondary: {
    color: "#6C757D",
  },

  successLight: {
    color: "#8EDFAF",
  },
  successNormal: {
    color: "#28A745",
  },
  successBold: {
    color: "#1E8435",
  },
  success: {
    color: "#28A745",
  },

  errorLight: {
    color: "#F1A8AF",
  },
  errorNormal: {
    color: "#DC3545",
  },
  errorBold: {
    color: "#A32939",
  },
  error: {
    color: "#DC3545",
  },

  warningLight: {
    color: "#FFE383",
  },
  warningNormal: {
    color: "#FFC107",
  },
  warningBold: {
    color: "#E0A800",
  },
  warning: {
    color: "#FFC107",
  },

  light: {
    color: "#666666",
  },
  normal: {
    color: "#333333",
  },
  bold: {
    color: "#000000",
  },
};

export const TextOverflowModeStyles: { [key: string]: any } = {
  clipTheEnd: "clip",
  ignoreTheStart: "head",
  ignoreTheMiddle: "middle",
  ignoreTheEnd: "tail",
};
