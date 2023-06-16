//it still shows typescript error for "it" even though we installed @types/jest.
//This is because we didn't included the __tests__ folder for compiling in tsconfig.json

import "react-native";
import React from "react";
import App from "../src/App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<App />);
});
