import React, { ReactNode } from "react";
import { Text } from "react-native";

export type CTextTypes = {
  children: ReactNode;
  accessibilityLabel?: string;
  testID?: string;
  style?: { [key: string]: any };
};

const CText: React.FC<CTextTypes> = ({
  children,
  accessibilityLabel,
  testID,
  style,
  ...rest
}) => (
  <Text
    accessibilityLabel={accessibilityLabel}
    testID={testID}
    style={style}
    {...rest}
  >
    {children}
  </Text>
);

export default CText;
