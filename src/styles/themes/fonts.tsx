import { Platform, TextStyle } from "react-native";
import { theme } from "./theme";

export const typeface = {
  fontFamily: Platform.select(theme.light.fonts),
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
