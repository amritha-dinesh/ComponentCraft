import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomCheckBox from "./CustomCheckbox";

describe("CustomCheckbox", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<CustomCheckBox />);
    const customCheckboxComponent = getByTestId("custom-checkbox");
    expect(customCheckboxComponent).toBeDefined();
  });

  it("should toggle the checkbox when clicked", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <CustomCheckBox value={false} onValueChanged={onChangeMock} />
    );
    const checkbox = getByTestId("custom-checkbox");
    fireEvent.press(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });
});
