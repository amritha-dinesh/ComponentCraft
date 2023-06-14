module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/jsx-uses-react": 1,
    "arrow-body-style": ["error"],
  },
};
