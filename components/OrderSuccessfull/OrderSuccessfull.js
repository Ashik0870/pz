// OrderSuccessfull.js
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import { GlobalStyles } from "../../constents/styles";
import CustomText from "../CustomText/CustomText";

export default function OrderSuccessfull({
  isModalVisible,
  setIsModalVisible,
  onConfirm,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <LottieView
            source={require("../../assets/animation/success.json")}
            autoPlay
            loop={false}
            style={styles.lottieAnimation}
          />
          <CustomText style={styles.successText}>
            Order Placed Successfully
          </CustomText>
          <View>
            <CustomText style={styles.description}>You placed trhe order Successfully</CustomText>
            <CustomText style={styles.description}>You will get Closed within 45 min</CustomText>
          </View>

          <TouchableOpacity style={styles.okButton} onPress={onConfirm}>
            <CustomText style={styles.keepBrowsingButtonText}>Keep Browsing</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    height: 300,
    backgroundColor: GlobalStyles.colors.primaryColor,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  lottieAnimation: {
    width: 100,
    height: 100,
    color: "red",
  },
  successText: {
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 20,
  },
  description:{
    color: GlobalStyles.colors.descriptionColor,
  },
  keepBrowsingButtonText: {
    marginBottom: 20,
    backgroundColor: GlobalStyles.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
