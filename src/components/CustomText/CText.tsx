/*
If you want to visuvalise all the various texts possible, use below code
#imports
import {FlatList } from "react-native";
import { CText } from "./mainExport";

#variable with all types possible
  const AllPossibleTypesOfText: any[] = [
    {
      variant: "headingLarge",
      textType: "primaryBold",
      content: "This is headingLarge & primaryBold & onPress",
      onPress: () => console.log("Text is pressed!"),
      numOfLines: 1,
      textOverflowMode: "ClipTheEnd",
      style: {
        color: "orange",
        padding: 20,
      },
    },
    {
      variant: "headingLarge",
      textType: "primaryBold",
      content: "This is headingLarge & primaryBold & onPress",
      onPress: () => console.log("Text is pressed!"),
      numOfLines: 1,
      textOverflowMode: "ignoreTheStart",
      style: {
        color: "teal",
      },
    },
    {
      variant: "headingLarge",
      textType: "primaryBold",
      content: "This is headingLarge & primaryBold & onPress",
      onPress: () => console.log("Text is pressed!"),
      numOfLines: 1,
      textOverflowMode: "ignoreTheMiddle",
      style: {
        color: "hotpink",
      },
    },
    {
      variant: "headingLarge",
      textType: "primaryBold",
      content: "This is headingLarge & primaryBold & onPress",
      onPress: () => console.log("Text is pressed!"),
      numOfLines: 1,
      textOverflowMode: "ignoreTheEnd",
    },
    {
      variant: "headingNormal",
      textType: "primaryNormal",
      content: "This is headingNormal & primaryNormal",
    },
    {
      variant: "heading",
      textType: "primary",
      content: "This is heading & primary",
    },
    {
      variant: "headingSmall",
      textType: "primaryLight",
      content: "This is headingSmall & primaryLight",
    },

    {
      variant: "subHeadingLarge",
      textType: "secondaryBold",
      content: "This is subHeadingLarge & secondaryBold",
    },
    {
      variant: "subHeadingNormal",
      textType: "secondaryNormal",
      content: "This is subHeadingNormal & secondaryNormal",
    },
    {
      variant: "subHeading",
      textType: "secondary",
      content: "This is subHeading & secondary",
    },
    {
      variant: "subHeadingSmall",
      textType: "secondaryLight",
      content: "This is subHeadingSmall & secondaryLight",
    },

    {
      variant: "bodyLarge",
      textType: "successBold",
      content: "This is bodyLarge & successBold",
    },
    {
      variant: "bodyNormal",
      textType: "successNormal",
      content: "This is bodyNormal & successNormal",
    },
    {
      variant: "body",
      textType: "success",
      content: "This is body & success",
    },
    {
      variant: "bodySmall",
      textType: "successLight",
      content: "This is bodySmall & successLight",
    },

    {
      textType: "errorBold",
      content: "This is errorBold",
    },
    {
      textType: "errorNormal",
      content: "This is errorNormal",
    },
    {
      textType: "error",
      content: "This is error",
    },
    {
      textType: "errorLight",
      content: "This is errorLight",
    },

    {
      textType: "warningBold",
      content: "This is warningBold",
    },
    {
      textType: "warningNormal",
      content: "This is warningNormal",
    },
    {
      textType: "warning",
      content: "This is warning",
    },
    {
      textType: "warningLight",
      content: "This is warningLight",
    },
    {
      textType: "bold",
      content: "This is bold",
    },
    {
      textType: "normal",
      content: "This is normal",
    },
    {
      textType: "light",
      content: "This is light",
    },
  ];

#FlatList to render all those types
  <FlatList
    data={AllPossibleTypesOfText}
    renderItem={({ item }) => (
        <CText
           variant={item?.variant}
           textType={item?.textType}
           numOfLines={item?.numOfLines}
           textOverflowMode={item?.textOverflowMode}
           onPress={item.onPress}
           style={item.style}
        >
          {item.content}
        </CText>
     )}
  />

*/

import React, { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import {
  VariantTypes,
  TextTypes,
  TextOverflowModeStyles,
  VariantTypesPossible,
  TextTypesPossible,
} from "./utils";

export type CTextPropsTypes = {
  /**
   *  accessibilityLabel => provides accessibility label for screen readers etc
   *
   *  children => takes the content inside CText component and renders it
   *
   *  numOfLines => To limit the text in given number of lines
   *
   *  onPress => to accept any callback functon on press the text
   *
   *  style => to provide custom styles to the component
   *
   *  testID => To provide testId for testing purposes
   *
   *  textOverflowMode => to provide the way how to crop the text in given no. of lines
   *                      will be effective only of numOfLines prop is given
   *
   *  textType => to provide suitable color to text based on context such as primary, success, error, warning etc
   *
   *  variant => to provide various text styles such as heading, subheading etc
   *
   */
  accessibilityLabel?: string;
  children: ReactNode;
  numOfLines?: number;
  onPress?: () => void;
  style?: TextStyle;
  testID?: string;
  textOverflowMode?:
    | "clipTheEnd"
    | "ignoreTheStart"
    | "ignoreTheMiddle"
    | "ignoreTheEnd";
  textType?: (typeof TextTypesPossible)[number];
  variant?: (typeof VariantTypesPossible)[number];
};

const CText: React.FC<CTextPropsTypes> = ({
  accessibilityLabel,
  children,
  numOfLines,
  onPress,
  style,
  testID,
  textOverflowMode,
  textType,
  variant,
  ...rest
}) => {
  const variantStyles: TextStyle =
    variant && VariantTypes.hasOwnProperty(variant)
      ? VariantTypes[variant as keyof typeof VariantTypes]
      : VariantTypes.body;

  const textTypeStyles: TextStyle =
    textType && TextTypes.hasOwnProperty(textType)
      ? TextTypes[textType as keyof typeof TextTypes]
      : TextTypes.normal;

  return (
    <Text
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      numberOfLines={numOfLines}
      ellipsizeMode={
        textOverflowMode && TextOverflowModeStyles[textOverflowMode]
      }
      onPress={onPress}
      style={[variantStyles, textTypeStyles, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default CText;
