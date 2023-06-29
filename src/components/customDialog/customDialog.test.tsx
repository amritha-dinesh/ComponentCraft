import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import CustomDialog from "./customDialog";
import Text from "../CustomText/CText";

describe("Custom Dialog Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CustomDialog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with default props", () => {
    const { getByText, queryByText } = render(<CustomDialog visible />);

    expect(getByText("Custom Dialog")).toBeDefined();
    expect(getByText("This is a custom dialog component.")).toBeDefined();
    expect(queryByText("Loading.....")).toBeNull(); // Loader should not be rendered
  });

  it("should render with custom props", () => {
    const { getByText } = render(
      <CustomDialog
        visible
        title="Test Dialog"
        message="This is a test dialog component."
        firstButton="OK"
        secondButton="Cancel"
        doubleButton
        button="Close"
        backgroundColor="red"
      >
        <Text>Custom Content</Text>
      </CustomDialog>
    );

    expect(getByText("Test Dialog")).toBeDefined();
    expect(getByText("This is a test dialog component.")).toBeDefined();
    expect(getByText("Custom Content")).toBeDefined();
  });

  it("should call onClose when button is pressed", () => {
    const onClose = jest.fn();
    const { getByText } = render(<CustomDialog visible onClose={onClose} />);

    fireEvent.press(getByText("Confirm"));

    expect(onClose).toHaveBeenCalled();
  });

  it("should call firstButtonClick and secondButtonClick when doubleButton is pressed", () => {
    const firstButtonClick = jest.fn();
    const secondButtonClick = jest.fn();
    const { getByText } = render(
      <CustomDialog
        visible
        doubleButton
        firstButtonClick={firstButtonClick}
        secondButtonClick={secondButtonClick}
      />
    );

    fireEvent.press(getByText("Agree"));
    fireEvent.press(getByText("Cancel"));

    expect(firstButtonClick).toHaveBeenCalled();
    expect(secondButtonClick).toHaveBeenCalled();
  });
});
