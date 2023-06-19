import React from "react";
import { render } from "@testing-library/react-native";
import Skeleton from "./skeleton";
import { grey300 } from "../../styles/themes/colors";

describe("Skeleton Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Skeleton />);
    const skeletonComponent = getByTestId("skeleton-component");

    expect(skeletonComponent).toBeDefined();
  });

  it("renders correctly when mode is slideUp", () => {
    const { getByTestId } = render(<Skeleton mode="slideUp" />);
    const skeletonComponent = getByTestId("skeleton-component");
    const slideUpStyle = {
      flexDirection: "column",
      padding: 10,
      opacity: 0,
      transform: [{ translateY: 100 }],
    };
    expect(skeletonComponent.props.style).toEqual(slideUpStyle);
  });

  it("renders correctly when mode is slideDown", () => {
    const { getByTestId } = render(<Skeleton mode="slideDown" />);
    const skeletonComponent = getByTestId("skeleton-component");
    const slideDownStyle = {
      flexDirection: "column",
      padding: 10,
      opacity: 0,
      transform: [{ translateY: -100 }],
    };
    expect(skeletonComponent.props.style).toEqual(slideDownStyle);
  });

  it("renders correctly when mode is slideLeft", () => {
    const { getByTestId } = render(<Skeleton mode="slideLeft" />);
    const skeletonComponent = getByTestId("skeleton-component");
    const slideLeftStyle = {
      flexDirection: "column",
      padding: 10,
      opacity: 0,
      transform: [{ translateX: 100 }],
    };
    expect(skeletonComponent.props.style).toEqual(slideLeftStyle);
  });

  it("renders correctly when mode is slideRight", () => {
    const { getByTestId } = render(<Skeleton mode="slideRight" />);
    const skeletonComponent = getByTestId("skeleton-component");
    const slideRightStyle = {
      flexDirection: "column",
      padding: 10,
      opacity: 0,
    };
    expect(skeletonComponent.props.style).toEqual(slideRightStyle);
  });

  it("renders when variant is box", () => {
    const { getByTestId } = render(<Skeleton variant="box" />);
    const skeletonComponent = getByTestId("box-skeleton");
    const boxStyle = [
      { height: 100, width: 100 },
      { backgroundColor: grey300 },
    ];
    expect(skeletonComponent.props.style).toEqual(boxStyle);
  });

  it("renders when variant is circle", () => {
    const { getByTestId } = render(<Skeleton variant="circle" />);
    const skeletonComponent = getByTestId("circle-skeleton");
    const circleStyle = [
      { height: 100, width: 100, borderRadius: 50 },
      { backgroundColor: grey300 },
    ];
    expect(skeletonComponent.props.style).toEqual(circleStyle);
  });

  it("renders when variant is similarProduct", () => {
    const { getByTestId } = render(<Skeleton variant="similarProduct" />);
    const skeletonComponent = getByTestId("similarProduct-skeleton");
    const similarProductStyle = [
      {
        height: 220,
        marginBottom: 10,
        backgroundColor: grey300,
        borderRadius: 4,
      },
      { width: "55%" },
    ];
    expect(skeletonComponent.props.style).toEqual(similarProductStyle);
  });

  it("renders when variant is user", () => {
    const { getByTestId } = render(<Skeleton variant="user" />);
    const skeletonComponent = getByTestId("user-skeleton");
    const userStyle = {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: grey300,
      marginRight: 10,
    };
    expect(skeletonComponent.props.style).toEqual(userStyle);
  });

  it("renders when variant is list", () => {
    const { getByTestId } = render(<Skeleton dataCount={3} variant="list" />);
    const skeletonComponent = getByTestId("list-skeleton");
    const listData = [1, 2, 3];
    expect(skeletonComponent.props.data).toEqual(listData);
  });
});
