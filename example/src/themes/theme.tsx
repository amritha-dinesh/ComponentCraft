import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { lightThemeColors, darkThemeColors } from "./colors";

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...lightThemeColors.colors,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...darkThemeColors.colors,
    },
  },
};
