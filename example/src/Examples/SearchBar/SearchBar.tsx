import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";
import { SearchBar } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof SafeAreaView> & {};

const CustomSearchBar = ({}: Props) => (
  <SafeAreaView>
    <ScrollView style={styles.white}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>SearchBar with Search Icon</Text>
        </View>
        <View style={styles.paddingNew}>
          <SearchBar
            searchIcon={require("../../../assets/search.png")}
            containerStyle={{ width: "90%", alignSelf: "center" }}
            placeholderTextColor="gray"
            inputContainerStyle={{
              borderWidth: 1,
              backgroundColor: "#f4f4f4",
            }}
            platform="ios"
            placeholder="Search"
          />
        </View>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>SearchBar with Cancel text Button</Text>
      </View>
      <View style={styles.paddingNew}>
        <SearchBar
          cancelButtonTitle="Cancel"
          containerStyle={{ width: "90%", alignSelf: "center" }}
          placeholderTextColor="gray"
          inputContainerStyle={{ borderWidth: 1, backgroundColor: "#f4f4f4" }}
          platform="ios"
          showCancel
          placeholder="Search"
          clearIcon={require("../../../assets/disabled.png")}
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>SearchBar with loading & round outline</Text>
      </View>
      <View style={styles.paddingNew}>
        <SearchBar
          containerStyle={{ width: "90%", alignSelf: "center" }}
          placeholderTextColor="gray"
          inputContainerStyle={{ borderWidth: 1, backgroundColor: "#f4f4f4" }}
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
CustomSearchBar.title = "SearchBar";
export default CustomSearchBar;
const styles = StyleSheet.create({
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
    left: 10,
  },
  paddingNew: {
    paddingTop: "1%",
    left: 10,
  },
  titleView: {
    paddingTop: 15,
    left: 20,
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
  white: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
