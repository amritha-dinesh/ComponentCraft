import { Platform, TextStyle } from "react-native";

export const typeface = {
  fontFamily: Platform.select({
    web: "Roboto Mono, monospace",
    ios: "System",
    android: "Roboto Mono, monospace, sans-serif",

    default: "sans-serif",
  }),

  weightRegular: "400" as "400",

  weightMedium: "500" as "500",

  weightBold: "700" as "700",
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
