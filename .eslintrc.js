module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/jsx-uses-react": 1,
    "arrow-body-style": ["error"],
  },
};
