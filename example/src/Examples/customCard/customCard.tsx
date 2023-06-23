import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { white } from "../../utils/themes/colors";
// import CustomCards from "../../../../src/components/customCard/customCard";
import { CustomCard as CustomCards } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & {};

const CustomCard = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={styles.white}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Mode's of Card</Text>
        </View>
        <CustomCards
          disabled
          mode="elevated"
          title="Elevated"
          content={
            "The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn, originally being a ship named the S.S. Cactus. The second part of the ship can only be accessed by using Dive and contains the Scanner."
          }
          children={
            <View>
              <Image
                source={require("../../../assets/wrecked-ship.jpg")}
                style={styles.image}
              />
            </View>
          }
        />
        <CustomCards mode="outlined" title="Outlined" />
        <CustomCards mode="contained" title="Contained" />
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default CustomCard;
CustomCard.title = "CustomCard";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  white: {
    backgroundColor: white,
  },
  container: {
    flex: 1,
    backgroundColor: white,
    width: "100%",
  },
  titleView: {
    paddingTop: 15,
    left: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  image: {
    alignSelf: "center",
    height: 250,
    width: 320,
    marginBottom: 20,
  },
});
