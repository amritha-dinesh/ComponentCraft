/* eslint-disable no-alert */
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
import { grey400 } from "../../utils/themes/colors";
import { CustomCard as CustomCards } from "component-craft";
import { useTheme } from "@react-navigation/native";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & object;

const CustomCard = ({}: Props) => {
  const { colors } = useTheme();

  return (
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
          <CustomCards
            onPress={() => {
              alert("Outlined card is pressed");
            }}
            mode="outlined"
            title="Outlined"
            subTitle="SubTitle Outlined"
            content={
              "This is a card using title and subtitle with specified variants and pressable feature, If you press me , I wil alert"
            }
            children={
              <View>
                <Image
                  source={require("../../../assets/bridge.jpg")}
                  style={styles.image}
                />
              </View>
            }
          />
          <CustomCards
            onLongPress={() => alert("The chameleon is long pressed")}
            mode="contained"
            title="Contained"
            content={
              "This is a chameleon with button. If you  press me, I will alert."
            }
            children={
              <View>
                <Image
                  source={require("../../../assets/chameleon.jpg")}
                  style={styles.image}
                />
                <View>
                  <TouchableOpacity
                    onPress={() => alert("Button is pressed")}
                    style={[styles.button, { backgroundColor: colors.text }]}
                  >
                    <Text style={{ color: colors.background }}>Click Me</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CustomCard;
CustomCard.title = "Card";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  white: {
    backgroundColor: grey400,
  },
  container: {
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
    height: 360,
    width: "90%",
    marginBottom: 20,
  },
  button: {
    borderWidth: 0.5,
    alignSelf: "center",
    padding: 10,
    borderRadius: 15,
  },
});
