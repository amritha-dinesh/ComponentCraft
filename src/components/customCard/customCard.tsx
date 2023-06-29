import React, { ReactNode } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { black } from "../../styles/themes/colors";
import { useTheme } from "@react-navigation/native";

interface CustomCardProps {
  title?: string;
  subTitle?: string;
  content?: string | React.ReactElement;
  mode?: "elevated" | "outlined" | "contained";
  onPress?: (e: GestureResponderEvent) => void;
  onLongPress?: () => void;
  delayLongPress?: number;
  testID?: string;
  disabled?: boolean;
  cardStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title = "Title",
  content,
  mode = "elevated",
  onPress,
  onLongPress,
  testID = "Card",
  disabled = false,
  cardStyle,
  titleStyle,
  contentStyle,
  delayLongPress,
  children,
  subTitle,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <TouchableOpacity
        testID={"Custom-card"}
        disabled={disabled}
        onPress={onPress}
        onLongPress={onLongPress}
        delayLongPress={delayLongPress}
      >
        <View
          testID={testID}
          style={[
            styles.card,
            { backgroundColor: colors.background },
            mode === "elevated"
              ? styles.elevated
              : mode === "outlined"
              ? styles.outlined
              : styles.contained,
            cardStyle,
          ]}
          {...rest}
        >
          {children}
          <Text style={[styles.title, { color: colors.text }, titleStyle]}>
            {title}
          </Text>
          <Text style={[styles.subTitle, { color: colors.text }, titleStyle]}>
            {subTitle}
          </Text>
          <View style={contentStyle}>
            <Text style={[{ color: colors.text }]}>{content}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default CustomCard;
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  elevated: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: black,
  },
  outlined: {
    borderWidth: 0.5,
  },
  contained: {
    borderWidth: 0.2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 8,
  },
});
