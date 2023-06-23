/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// import CustomInput from "./customInput/customInput";
import CustomButton from "./customButton/customButton";
import CustomCheckBox from "./checkbox/customCheckbox";
import CustomSwitch from "./Switch/Switch";
import CustomSearchBar from "./SearchBar/SearchBar";
import CustomCard from "./customCard/customCard";

export const mainExamples: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  CustomButton: CustomButton,
  CustomCard: CustomCard,
  CustomCheckBox: CustomCheckBox,
  // CustomInput: CustomInput,
  CustomSearchBar: CustomSearchBar,
  CustomSwitch: CustomSwitch,
};

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
type RootStackParamList = {
  [key: string]: undefined;
};
type Props = {
  navigation: NativeStackScreenProps<RootStackParamList>["navigation"];
};

type Item = {
  id: string;
  data: (typeof mainExamples)[string];
};

const data = Object.keys(mainExamples).map(
  (id): Item => ({ id, data: mainExamples[id] })
);
const ExampleList = ({ navigation }: Props) => {
  const renderItem = ({ item }: { item: Item }) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { data, id } = item;

    return (
      <Text style={{ padding: 10 }} onPress={() => navigation.navigate(id)}>
        {data.title}
      </Text>
    );
  };
  const ItemSeperator = () => (
    <View style={{ backgroundColor: "gray", height: 1 }} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={ItemSeperator}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ExampleList;
