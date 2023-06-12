import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
  SafeAreaView,
  ScrollView,
} from "react-native";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & {
  contentStyle?: StyleProp<ViewStyle>;
};
const CustomButton = ({ contentStyle }: Props) => (
  <SafeAreaView>
    <ScrollView style={styles.white}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mode's of Button</Text>
      </View>
      <View style={styles.paddingTop}>
        <View style={styles.contentStyle}>
          <TouchableOpacity
            onPress={() => console.log("enter here")}
            style={styles.outlined}
          >
            <View style={styles.innerContentStyle}>
              <Text style={[styles.buttonTextStyle]}>Outlined Button</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={() => console.log("enter here")}>
            <View style={styles.innerContentStyle}>
              <Text style={[styles.buttonTextStyle]}>Text Button</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.paddingTop}>
          <View style={styles.contentStyle}>
            <TouchableOpacity
              onPress={() => console.log("enter here")}
              style={styles.contained}
            >
              <View style={styles.innerContentStyle}>
                <Text style={[styles.buttonTextStyle]}>Contained Button</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Button with Icon</Text>
        </View>
        <View style={styles.paddingTop}>
          <View style={styles.contentStyle}>
            <TouchableOpacity
              onPress={() => console.log("enter here")}
              style={styles.outlined}
            >
              <View style={styles.innerContentStyle}>
                <View style={contentStyle}>
                  <Image
                    style={styles.iconStyle}
                    source={require("../../assets/settings.png")}
                  />
                </View>
                <Text style={[styles.buttonTextStyle]}>Outlined Button</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={() => console.log("enter here")}>
            <View style={styles.innerContentStyle}>
              <View style={contentStyle}>
                <Image
                  style={styles.iconStyle}
                  source={require("../../assets/settings.png")}
                />
              </View>
              <Text style={[styles.buttonTextStyle]}>Text Button</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.paddingTop}>
          <View style={styles.contentStyle}>
            <TouchableOpacity
              onPress={() => console.log("enter here")}
              style={styles.contained}
            >
              <View style={styles.innerContentStyle}>
                <View style={contentStyle}>
                  <Image
                    style={styles.iconStyle}
                    source={require("../../assets/settings.png")}
                  />
                </View>
                <Text style={[styles.buttonTextStyle]}>Contained Button</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Button with Loader</Text>
        </View>
        <View style={styles.paddingTop}>
          <View style={styles.contentStyle}>
            <TouchableOpacity
              onPress={() => console.log("enter here")}
              style={styles.outlined}
            >
              <View style={styles.innerContentStyle}>
                <ActivityIndicator color={"black"} style={styles.iconStyle} />
                <Text style={[styles.buttonTextStyle]}>Outlined Button</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={() => console.log("enter here")}>
            <View style={styles.innerContentStyle}>
              <ActivityIndicator color={"black"} style={styles.iconStyle} />
              <Text style={[styles.buttonTextStyle]}>Text Button</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.paddingTop}>
          <View style={styles.contentStyle}>
            <TouchableOpacity
              onPress={() => console.log("enter here")}
              style={styles.contained}
            >
              <View style={styles.innerContentStyle}>
                <ActivityIndicator color={"black"} style={styles.iconStyle} />
                <Text style={[styles.buttonTextStyle]}>Contained Button</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Disabled Button</Text>
        </View>
        <View style={styles.paddingTop}>
          <View style={styles.contentStyle}>
            <TouchableOpacity disabled={true} style={styles.outlinedDisable}>
              <View style={styles.innerContentStyle}>
                <Text style={[styles.buttonTextStyle, styles.grayColor]}>
                  Outlined Button
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={() => console.log("enter here")}>
            <View style={styles.innerContentStyle}>
              <Text style={[styles.buttonTextStyle, styles.grayColor]}>
                Text Button
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.paddingTop, styles.paddingBottom]}>
          <View style={styles.contentStyle}>
            <TouchableOpacity
              onPress={() => console.log("enter here")}
              style={styles.containedDisable}
            >
              <View style={styles.innerContentStyle}>
                <Text style={[styles.buttonTextStyle]}>Contained Button</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
CustomButton.title = "CustomButton";

export default CustomButton;

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: "center",
  },
  titleContainer: {
    paddingTop: 15,
    left: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  paddingTop: {
    paddingTop: "5%",
  },
  paddingBottom: {
    paddingBottom: "5%",
  },
  outlinedDisable: {
    backgroundColor: "#f5f5f5",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  containedDisable: {
    backgroundColor: "#e1f5fe",
    borderColor: "#e1f5fe",
    borderWidth: 1,
    borderRadius: 5,
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  contained: {
    backgroundColor: "skyblue",
    borderColor: "skyblue",
    borderWidth: 1,
    borderRadius: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  innerContentStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  grayColor: {
    color: "gray",
  },
  white: {
    backgroundColor: "white",
  },
  buttonTextStyle: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
