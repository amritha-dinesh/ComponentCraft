import { Platform, TextStyle } from "react-native";

export const typeface = {
  fontFamily: Platform.select({
    web: "Roboto Mono, monospace",
    ios: "System",
    android: "Roboto Mono, monospace, sans-serif",

    default: "sans-serif",
  }),

  weightRegular: "400" as const,

  weightMedium: "500" as const,

  weightBold: "700" as const,
};

export const regularType: TextStyle = {
  fontFamily: typeface?.fontFamily,

  fontWeight: typeface?.weightRegular,

  letterSpacing: 0,
};

export const boldType: TextStyle = {
  fontFamily: typeface?.fontFamily,

  fontWeight: typeface?.weightBold,

  letterSpacing: 0.15,
};
