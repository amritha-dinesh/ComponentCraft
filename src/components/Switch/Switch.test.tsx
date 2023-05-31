import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Switch from "./Switch";

describe("Switch", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Switch />);
    const switchComponent = getByTestId("switch");
    expect(switchComponent).toBeDefined();
  });

  it("renders enabled switch by default", () => {
    const { getByTestId } = render(<Switch />);
    const switchComponent = getByTestId("switch");
    expect(switchComponent.props.disabled).toBeFalsy();
  });

  it("renders disabled switch when disabled prop is true", () => {
    const { getByTestId } = render(<Switch disabled />);
    const switchComponent = getByTestId("switch");
    expect(switchComponent.props.disabled).toBeTruthy();
  });

  it("triggers onValueChange callback when switch is toggled", () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <Switch onValueChange={onValueChangeMock} />
    );
    const switchComponent = getByTestId("switch");
    fireEvent(switchComponent, "valueChange", true);
    expect(onValueChangeMock).toHaveBeenCalledWith(true);

    fireEvent(switchComponent, "valueChange", false);
    expect(onValueChangeMock).toHaveBeenCalledWith(false);
  });

  it("applies custom color to the switch", () => {
    const customColor = "blue";
    const { getByTestId } = render(<Switch color={customColor} />);
    const switchComponent = getByTestId("switch");
    expect(switchComponent.props.color).toBe(customColor);
  });
});
