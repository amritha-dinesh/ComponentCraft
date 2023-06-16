import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Dropdown from "./DropDown";

describe("Dropdown Component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  test("Single-select dropdown", () => {
    const { getByTestId, queryByText, getAllByText } = render(
      <Dropdown options={options} multiSelect={false} />
    );

    // Assert that the dropdown list is initially closed
    expect(queryByText("Option 1")).toBeFalsy();

    // Open the dropdown list
    fireEvent.press(getByTestId("dropdown-image"));

    // Select an option
    const option2Elements = getAllByText("Option 2");
    fireEvent.press(option2Elements[0]);

    // Close the dropdown list
    fireEvent.press(getByTestId("dropdown-image"));

    // Assert that the dropdown list is closed
    expect(queryByText("Option 1")).toBeFalsy();
  });
});
