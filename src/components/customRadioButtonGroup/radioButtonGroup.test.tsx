import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import RadioButtonGroup from "./radioButtonGroup";
import { green500 } from "../../styles/themes/colors";

describe("CustomCheckboxGroup", () => {
  it("should match the snapshot", () => {
    const options = [
      { label: "Java", value: "Java" },
      { label: "Kotlin", value: "Kotlin" },
      { label: "Javascript", value: "Javascript" },
    ];
    const { toJSON } = render(<RadioButtonGroup options={options} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<RadioButtonGroup options={[]} />);
    const customCheckboxGroup = getByTestId("radio-button-group");
    expect(customCheckboxGroup).toBeDefined();
  });

  it("should render the correct number of radio buttons", () => {
    const options = [
      { label: "Java", value: "Java" },
      { label: "Kotlin", value: "Kotlin" },
      { label: "Javascript", value: "Javascript" },
    ];
    const { getAllByTestId } = render(<RadioButtonGroup options={options} />);
    const radioButton = getAllByTestId("radio-button");
    expect(radioButton.length).toBe(options.length);
  });

  it("should select the correct option when clicked", () => {
    const options = [
      { label: "Option 1", value: "Option 1" },
      { label: "Option 2", value: "Option 2" },
      { label: "Option 3", value: "Option 3" },
    ];
    const { getByText } = render(
      <RadioButtonGroup options={options} labelColor={green500} />
    );
    fireEvent.press(getByText("Option 2"));
    const selectedOption = getByText("Option 2");
    const textStyle = selectedOption.props.style;
    const colorStyle = Array.isArray(textStyle)
      ? textStyle.find((style) => style.hasOwnProperty("color"))
      : textStyle;
    const color = colorStyle.color;

    expect(color).toBe(green500);
  });

  it("should call the onSubmit callback with the selected option", () => {
    const options = [
      { label: "Option 1", value: "Option 1" },
      { label: "Option 2", value: "Option 2" },
      { label: "Option 3", value: "Option 3" },
    ];
    const onSubmitMock = jest.fn();
    const { getByText } = render(
      <RadioButtonGroup options={options} onSubmit={onSubmitMock} />
    );
    fireEvent.press(getByText("Option 3"));
    expect(onSubmitMock).toHaveBeenCalledWith({
      label: "Option 3",
      value: "Option 3",
    });
  });
});
