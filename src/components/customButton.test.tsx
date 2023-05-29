import * as React from "react";
import { render } from "@testing-library/react-native";
import CustomButton from "./customButton";
import { getButtonColors } from "./utils";

it("renders text button by default", () => {
  const tree = render(
    <CustomButton buttonTitle="helloworld"></CustomButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders text button with mode", () => {
  const tree = render(
    <CustomButton buttonTitle="helloworld" mode="text"></CustomButton>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders contained button with mode", () => {
  const tree = render(
    <CustomButton mode="contained" buttonTitle="helloworld"></CustomButton>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders disabled button", () => {
  const tree = render(
    <CustomButton disabled buttonTitle="helloworld"></CustomButton>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
it("renders button with custom testID", () => {
  const tree = render(
    <CustomButton
      testID={"custom:testID"}
      buttonTitle="helloworld"
    ></CustomButton>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders button with an accessibility label", () => {
  const tree = render(
    <CustomButton accessibilityLabel={"label"}></CustomButton>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders button with an accessibility hint", () => {
  const tree = render(
    <CustomButton accessibilityHint={"hint"}></CustomButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
