import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";
import { SearchBar } from "component-craft";
import { white, grey300, grey500 } from "../../utils/themes/colors";
import { useTheme } from "@react-navigation/native";
type Props = React.ComponentPropsWithRef<typeof SafeAreaView> & object;

const CustomSearchBar = ({}: Props) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <View style={styles.titleView}>
            <Text style={[styles.title, { color: colors.text }]}>
              SearchBar with Search Icon
            </Text>
          </View>
          <View style={styles.paddingNew}>
            <SearchBar
              searchIcon={require("../../../assets/search.png")}
              containerStyle={styles.containerStyle}
              placeholderTextColor={grey500}
              inputContainerStyle={styles.inputContainer}
              platform="ios"
              placeholder="Search"
            />
          </View>
        </View>
        <View style={styles.titleView}>
          <Text style={[styles.title, { color: colors.text }]}>
            SearchBar with Cancel text Button
          </Text>
        </View>
        <View style={styles.paddingNew}>
          <SearchBar
            cancelButtonTitle="Cancel"
            containerStyle={styles.containerStyle}
            placeholderTextColor={grey500}
            inputContainerStyle={styles.inputContainer}
            platform="ios"
            showCancel
            placeholder="Search"
            clearIcon={require("../../../assets/disabled.png")}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={[styles.title, { color: colors.text }]}>
            SearchBar with loading & round outline
          </Text>
        </View>
        <View style={styles.paddingNew}>
          <SearchBar
            containerStyle={styles.containerStyle}
            placeholderTextColor={grey500}
            inputContainerStyle={styles.inputContainer}
            platform="ios"
            showLoading
            round
            placeholder="Search"
            clearIcon={require("../../../assets/disabled.png")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
CustomSearchBar.title = "SearchBar";
export default CustomSearchBar;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  paddingNew: {
    paddingTop: "1%",
    left: 10,
  },
  titleView: {
    paddingTop: 15,
    left: 20,
  },
  white: {
    backgroundColor: white,
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
  containerStyle: {
    width: "90%",
    alignSelf: "center",
  },
  inputContainer: {
    borderWidth: 1,
    backgroundColor: grey300,
  },
});
