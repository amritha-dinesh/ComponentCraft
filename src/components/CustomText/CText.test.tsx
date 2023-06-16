import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import CText from "./CText";

describe("CText component tests", () => {
  it("should match the snapshot", () => {
    const tree = render(<CText>This is for testing</CText>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render CText component with various props", () => {
    const tree = render(
      <CText variant="subHeadingLarge" textType="successBold">
        This is for testing
      </CText>
    );
    const element = tree.getByText("This is for testing");
    expect(element).toBeTruthy();
  });

  it("should call the onPress function when clicked the text", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CText
        variant="headingLarge"
        textType="primaryBold"
        onPress={onPressMock}
      >
        Click me
      </CText>
    );
    const textElement = getByText("Click me");
    fireEvent.press(textElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
