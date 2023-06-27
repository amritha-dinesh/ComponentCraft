import { StyleSheet, TextStyle } from "react-native";
import { regularType, boldType } from "./fonts";

export const typography = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
  },
  error: {
    fontSize: 14,
    fontWeight: "400",
  },
});

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
