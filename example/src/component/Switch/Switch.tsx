import * as React from "react";
import {
  StyleProp,
  Switch as NativeSwitch,
  ViewStyle,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from "react-native";

export type Props = React.ComponentPropsWithRef<typeof NativeSwitch> & {
  /**
   * Disable toggling the switch.
   */
  disabled?: boolean;
  /**
   * Value of the switch, true means 'on', false means 'off'.
   */
  value?: boolean;
  /**
   * Custom color for switch.
   */
  color?: string;
  /**
   * Callback called with the new value when it changes.
   */
  onValueChange?: Function;
  style?: StyleProp<ViewStyle>;
  /**
   * Accessibility label for the switch.
   */
  accessibilityLabel?: string;
};

const CustomSwitch = ({}: Props) => {
  const [switchValue, setSwitchValue] = React.useState(false);
  const [defaultValue, setDefaultValue] = React.useState(true);
  const [color, setColor] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Mode's of Toggle Switch
          </Text>
        </View>
        <View style={{ padding: "10%", flexDirection: "row" }}>
          <NativeSwitch
            value={switchValue}
            onValueChange={() => {
              setSwitchValue(!switchValue);
            }}
          />
          <Text style={{ left: 20, top: 5 }}>Switch with Enable mode</Text>
        </View>
        <View style={{ paddingLeft: "10%", flexDirection: "row" }}>
          <NativeSwitch value={false} disabled={true} />
          <Text style={{ left: 20, top: 5 }}>Switch with disable mode</Text>
        </View>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Toggle Switch with default value
          </Text>
        </View>
        <View style={{ padding: "10%", flexDirection: "row" }}>
          <NativeSwitch
            value={defaultValue}
            onValueChange={() => {
              setDefaultValue(!defaultValue);
            }}
          />
          <Text style={{ left: 20, top: 5 }}>
            Enabled Switch with default value
          </Text>
        </View>
        <View style={{ paddingLeft: "10%", flexDirection: "row" }}>
          <NativeSwitch value={true} disabled={true} />
          <Text style={{ left: 20, top: 5 }}>
            Disabled Switch with default value
          </Text>
        </View>
        <View style={{ paddingTop: 15, left: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Toggle Switch with color
          </Text>
        </View>
        <View style={{ padding: "10%", flexDirection: "row" }}>
          <NativeSwitch
            trackColor={{ true: "green", false: "blue" }}
            value={color}
            onValueChange={() => {
              setColor(!color);
            }}
          />
          <Text style={{ left: 20, top: 5 }}>
            Enabled Switch with default value
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
CustomSwitch.title = "CustomSwitch";

export default CustomSwitch;
