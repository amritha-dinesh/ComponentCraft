import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import { white, lightBlue500, grey400 } from "../../utils/themes/colors";
import { Skeleton as Skeletons } from "component-craft";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> & object;

const Skeleton = ({}: Props) => (
  <SafeAreaView style={styles.main}>
    <ScrollView style={{ backgroundColor: grey400 }}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>User Variant</Text>
        </View>
        <Skeletons variant="user" />
        <View style={styles.titleView}>
          <Text style={styles.title}>List Variant</Text>
        </View>
        <Skeletons variant="list" height={20} width={"80%"} dataCount={5} />
        <View style={styles.titleView}>
          <Text style={styles.title}>Box Variant</Text>
        </View>
        <Skeletons variant="box" />
        <View style={styles.titleView}>
          <Text style={styles.title}>Circle Variant</Text>
        </View>
        <Skeletons variant="circle" />
        <View style={styles.titleView}>
          <Text style={styles.title}>Product Variant</Text>
        </View>
        <Skeletons variant="similarProduct" />
        <View style={styles.titleView}>
          <Text style={styles.title}>Slide Up Mode</Text>
        </View>
        <Skeletons
          variant="list"
          mode="slideUp"
          dataCount={3}
          height={20}
          width={"80%"}
        />
        <View style={styles.padding}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Slide Right Mode</Text>
          </View>
          <Skeletons variant="box" mode="slideRight" />
        </View>
        <View style={styles.padding}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Slide left & down Mode</Text>
          </View>
          <Skeletons variant="box" mode="slideLeft" />
        </View>
        <View style={styles.padding}>
          <View style={styles.titleView} />
          <Skeletons variant="circle" mode="slideDown" />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default Skeleton;
Skeleton.title = "Skeleton";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  white: {
    backgroundColor: white,
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
    backgroundColor: lightBlue500,
  },
  padding: {
    paddingTop: 30,
  },
});
