import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  generateArray,
  slideUpStyle,
  slideDownStyle,
  slideLeftStyle,
  slideRightStyle,
} from "./utils";
import { grey200, grey300 } from "../../styles/themes/colors";

interface SkeletonProps {
  mode?: "slideUp" | "slideLeft" | "slideRight" | "slideDown";
  height?: number | string;
  width?: number | string;
  variant?: "box" | "circle" | "similarProduct" | "list" | "user";
  dataCount?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  mode,
  height = 100,
  width = 100,
  variant,
  dataCount = 1,
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [fadeAnim]);
  let borderRadius = 0;

  if (variant === "circle") {
    borderRadius =
      typeof height === "string" ? parseInt(height, 10) / 2 : height / 2;
  }

  return (
    <SafeAreaView>
      <Animated.View
        testID="skeleton-component"
        style={[
          styles.container,
          { opacity: fadeAnim },
          mode === "slideUp" && slideUpStyle(fadeAnim),
          mode === "slideLeft" && slideLeftStyle(fadeAnim),
          mode === "slideRight" && slideRightStyle(fadeAnim),
          mode === "slideDown" && slideDownStyle(fadeAnim),
        ]}
      >
        {variant === "list" && (
          <SafeAreaView>
            <FlatList
              testID="list-skeleton"
              data={generateArray(dataCount)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={() => (
                <View style={[styles.container]}>
                  <View style={[{ height, width }, styles.backgroundColor]} />
                </View>
              )}
            />
          </SafeAreaView>
        )}

        {variant === "user" && (
          <View style={styles.userContainer}>
            <View testID="user-skeleton" style={styles.avatar} />
            <View style={styles.userInfo}>
              <View style={[styles.placeholder, styles.userInfoItem]} />
              <View style={[styles.placeholder, styles.userInfoItem]} />
              <View style={[styles.placeholder, styles.userInfoItem]} />
            </View>
          </View>
        )}

        {variant === "box" && (
          <View
            testID="box-skeleton"
            style={[{ height, width }, styles.backgroundColor]}
          />
        )}
        {variant === "circle" && (
          <View
            testID="circle-skeleton"
            style={[{ height, width, borderRadius }, styles.backgroundColor]}
          />
        )}

        {variant === "similarProduct" && (
          <View style={styles.subContainer}>
            <View
              testID="similarProduct-skeleton"
              style={[styles.placeholder, styles.placeHolderWidth]}
            >
              <View style={styles.subContainerView}>
                <View style={styles.subContainerContent} />
                <View style={[styles.smallView, styles.content]} />

                <View style={[styles.smallViewContent, styles.content]} />
              </View>
            </View>
            <View style={[styles.placeholder1, styles.placeHolder1Width]}>
              <View style={styles.contentView}>
                <View style={styles.placeholder2}>
                  <View style={styles.subView}>
                    <View style={[styles.smallView, styles.content]} />

                    <View style={[styles.smallViewContent, styles.content]} />
                  </View>
                </View>
                <View style={styles.placeholder2}>
                  <View style={styles.subView}>
                    <View style={[styles.smallView, styles.content]} />
                    <View style={[styles.smallViewContent, styles.content]} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subContainerContent: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: grey200,
    height: 12,
  },
  subContainerView: {
    flex: 1,
    justifyContent: "center",
    top: 60,
  },
  contentView: {
    justifyContent: "space-between",
    flex: 1,
  },
  content: {
    alignSelf: "center",
    backgroundColor: grey200,
    marginTop: 10,
  },
  placeholder: {
    height: 220,
    marginBottom: 10,
    backgroundColor: grey300,
    borderRadius: 4,
  },
  placeholder1: {
    height: 220,
    marginBottom: 10,
    borderRadius: 4,
  },
  placeholder2: {
    height: 105,
    backgroundColor: grey300,
    borderRadius: 4,
  },
  smallView: {
    width: "60%",
    height: 10,
  },
  smallViewContent: {
    width: "80%",
    height: 9,
  },
  subView: {
    justifyContent: "center",
    flex: 1,
    top: 20,
  },
  placeHolder1Width: {
    width: "40%",
  },
  placeHolderWidth: {
    width: "55%",
  },
  backgroundColor: {
    backgroundColor: grey300,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: grey300,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  userInfoItem: {
    height: 12,
    backgroundColor: grey300,
    marginBottom: 5,
    borderRadius: 4,
  },
});

export default Skeleton;
