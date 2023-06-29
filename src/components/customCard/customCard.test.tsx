import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import CustomCard from "./customCard";

describe("Custom Card Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CustomCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly find", () => {
    const { getByTestId } = render(<CustomCard />);
    const CustomCardComponent = getByTestId("Card");
    expect(CustomCardComponent).toBeDefined();
  });

  it("renders custom Card by elevated mode", () => {
    const { getByTestId } = render(<CustomCard mode="elevated" />);
    const elevatedStyle = {
      backgroundColor: "rgb(242, 242, 242)",
    };
    const CustomCardComponent = getByTestId("Card");
    expect(CustomCardComponent.props.style[1]).toEqual(elevatedStyle);
  });
  it("renders custom Card by outlined mode", () => {
    const { getByTestId } = render(<CustomCard mode="outlined" />);
    const outlinedStyle = {
      backgroundColor: "rgb(242, 242, 242)",
    };
    const CustomCardComponent = getByTestId("Card");
    expect(CustomCardComponent.props.style[1]).toEqual(outlinedStyle);
  });
  it("renders custom Card by contained mode", () => {
    const { getByTestId } = render(<CustomCard mode="contained" />);
    const containedStyle = {
      backgroundColor: "rgb(242, 242, 242)",
    };
    const CustomCardComponent = getByTestId("Card");
    expect(CustomCardComponent.props.style[1]).toEqual(containedStyle);
  });
  it("renders enabled custom Card by default", () => {
    const { getByTestId } = render(<CustomCard />);
    const CustomCardComponent = getByTestId("Custom-card");
    expect(CustomCardComponent.props.accessibilityState.disabled).toBeFalsy();
  });

  it("renders disabled cusom Card when disabled prop is true", () => {
    const { getByTestId } = render(<CustomCard disabled />);
    const CustomCardComponent = getByTestId("Custom-card");
    expect(CustomCardComponent.props.accessibilityState.disabled).toBeTruthy();
  });
});
