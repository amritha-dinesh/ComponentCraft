import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { lightThemeColors, darkThemeColors } from "./colors";
import { spacing } from "./spacing";
import { componentSizes } from "./constants";

export const defaultFontFamily = {
  web: "Roboto Mono, monospace",
  ios: "System",
  android: "Roboto Mono, monospace, sans-serif",
  default: "sans-serif",
};

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...lightThemeColors,
    },
    fonts: defaultFontFamily,
    spacing,
    componentSizes,
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...darkThemeColors,
    },
    fonts: defaultFontFamily,
    spacing,
    componentSizes,
  },
};

export const darkTheme = theme.dark;
export const lightTheme = theme.light;
