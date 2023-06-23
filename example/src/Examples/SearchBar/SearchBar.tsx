import React from "react";
import { SafeAreaView } from "react-native";
// import SearchBar from "../../../../src/components/SearchBar/SearchBar";
import { SearchBar } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof SafeAreaView> & {};

const CustomSearchBar = ({}: Props) => (
  <SafeAreaView>
    <SearchBar
      //   searchIcon={
      //     <Image
      //       source={require("../../assets/search.png")}
      //     />
      //   }
      //   containerStyle={{ width: "90%", alignSelf: "center" }}
      placeholderTextColor="gray"
      //   inputContainerStyle={{ borderWidth: 1 }}
      platform="ios"
      placeholder="searchbar"
    />
  </SafeAreaView>
);
CustomSearchBar.title = "CustomSearchBar";
export default CustomSearchBar;
