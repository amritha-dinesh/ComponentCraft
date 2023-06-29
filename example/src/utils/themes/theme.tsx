import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { lightThemeColors, darkThemeColors } from "./colors";

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...lightThemeColors,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...darkThemeColors,
    },
  },
};
