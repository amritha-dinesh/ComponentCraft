import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { lightThemeColors, darkThemeColors } from "./colors";
import { VariantTypes } from "./typography";

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...lightThemeColors.colors,
    },
    fonts: VariantTypes,
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...darkThemeColors.colors,
    },
    fonts: VariantTypes,
  },
};
