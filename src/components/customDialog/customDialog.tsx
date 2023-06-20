import React, { FC, ReactNode } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { semiBlack, white, blue500 } from "../../styles/themes/colors";

interface CustomDialogProps {
  visible?: boolean;
  onClose?: () => void;
  title?: string;
  message?: string;
  firstButton?: string;
  secondButton?: string;
  button?: string;
  doubleButton?: boolean;
  firstButtonClick?: () => void;
  secondButtonClick?: () => void;
  loader?: boolean;
  backgroundColor?: string;
  children?: ReactNode;
}

const CustomDialog: FC<CustomDialogProps> = ({
  visible = false,
  onClose,
  title = "Custom Dialog",
  message = "This is a custom dialog component.",
  firstButton = "Agree",
  secondButton = "Cancel",
  button = "Confirm",
  doubleButton,
  firstButtonClick,
  secondButtonClick,
  loader = false,
  backgroundColor = white,
  children,
}) => {
  if (!visible) return null;

  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={[styles.dialog, { backgroundColor }]}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require("../../assets/disabled.png")}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.message}>{message}</Text>
          {children}
          {loader && (
            <View style={styles.loaderView}>
              <ActivityIndicator size="large" color={blue500} />
              <Text style={styles.loadingText}>Loading.....</Text>
            </View>
          )}
          {button && (
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          )}
          {doubleButton && (
            <View style={styles.doubleButton}>
              <TouchableOpacity
                style={[styles.button, styles.marginRight]}
                onPress={firstButtonClick}
              >
                <Text style={styles.buttonText}>{firstButton}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={secondButtonClick}
              >
                <Text style={styles.buttonText}>{secondButton}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: semiBlack,
  },
  dialog: {
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  message: {
    marginBottom: 16,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: blue500,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: "flex-end",
  },

  buttonText: {
    color: white,
    fontWeight: "bold",
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  doubleButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  marginRight: {
    marginRight: 20,
  },
  loadingText: {
    padding: 10,
  },
  loaderView: {
    flexDirection: "row",
    paddingLeft: 10,
  },
});

export default CustomDialog;
