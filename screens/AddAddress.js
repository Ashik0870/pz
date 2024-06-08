import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import BackArrow from "../components/BackArrow/BackArrow";
import TitleDescription from "../components/TitleDescription/TitleDescription";
import Button from "../UI/Button";
import MyTextInput from "../components/MyTextInput/MyTextInput";
import { GlobalStyles } from "../constents/styles";
import SelectButton from "../components/SelectButton/SelectButton";
import home from "../assets/address/Vector.png";
import CustomText from "../components/CustomText/CustomText";

export default function AddAddress({ navigation }) {
  const image = require("../assets/location/image4.png");
  const [selectedAddressType, setSelectedAddressType] = useState(null);
  const [house, setHouse] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleSelectAddressType = (type) => {
    if (selectedAddressType === type) {
      setSelectedAddressType(null);
    } else {
      setSelectedAddressType(type);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackArrow />
        </TouchableOpacity>
        <CustomText style={styles.title}>Add Address</CustomText>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        enabled
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <TitleDescription />
          <View style={styles.inputContainer}>
            <MyTextInput
              label="House/Flat/Socity"
              placeholder="Enter House/Flat/Socity here"
              onChangeText={setHouse}
              value={house}
            />
            <MyTextInput
              label="Landmark"
              placeholder="Enter Landmark here"
              onChangeText={setLandmark}
              value={landmark}
            />
          </View>
          <View style={styles.saveAs}>
            <CustomText style={styles.saveAsTitle}>Save As</CustomText>
            <View style={styles.addressContainer}>
              <SelectButton
                image={home}
                label="Home"
                onPress={() => handleSelectAddressType("Home")}
                isSelected={selectedAddressType === "Home"}
              />
              <SelectButton
                image={home}
                label="Work"
                onPress={() => handleSelectAddressType("Work")}
                isSelected={selectedAddressType === "Work"}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate("Signin")}
            >
              Save Address
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: GlobalStyles.colors.backgroundColor,

  },
  imageContainer: {
    top: 0,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height:400,
    width: 350,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 25,
    marginTop: 20,
  },
  button: {
    width: 210,
    height: 45,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  addressContainer: {
    flexDirection: "row",
    gap: 20,
  },
  saveAs: {
    marginHorizontal: 25,
    marginTop: 25,
  },
  saveAsTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 30,
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, 
  },
  inputContainer: {
    // marginTop: 25,
    gap: 20,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});
