import React from "react";
import { render } from "@testing-library/react-native";
import CustomProgressBar from "./customProgressBar";

describe("CustomProgressBar", () => {
  it("should match the snapshot", () => {
    const { toJSON } = render(<CustomProgressBar progress={0} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<CustomProgressBar progress={0} />);
    const customProgressBarComponent = getByTestId("custom-progress-bar");
    expect(customProgressBarComponent).toBeDefined();
  });

  it("should have the default border radius when not specified", () => {
    const { getByTestId } = render(<CustomProgressBar progress={0} />);
    const customProgressBarComponent = getByTestId("custom-progress-bar");
    const containerElement = customProgressBarComponent.props.style[1];
    expect(containerElement).toHaveProperty("borderRadius", 5);
  });

  it("should apply custom width and height when specified", () => {
    const { getByTestId } = render(
      <CustomProgressBar progress={0} width={200} height={20} />
    );
    const customProgressBarComponent = getByTestId("custom-progress-bar");
    const containerElement = customProgressBarComponent.props.style[1];
    const { width, height } = containerElement;
    expect(width).toBe(200);
    expect(height).toBe(20);
  });
});
