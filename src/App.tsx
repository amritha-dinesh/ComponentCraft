import React from "react";
import { View, FlatList } from "react-native";
import { CText } from "./mainExport";

function App(): JSX.Element {
  const AllPossibleTypesOfText: any[] = [
    {
      variant: "headingLarge",
      textType: "primaryBold",
      content: "This is headingLarge & primaryBold",
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

  return (
    <View>
      <FlatList
        data={AllPossibleTypesOfText}
        renderItem={({ item }) => (
          <CText variant={item?.variant} textType={item?.textType}>
            {item.content}
          </CText>
        )}
      />
    </View>
  );
}

export default App;
