
import bellIcon from "../assets/Mycart/bell.jpg";
import profileDetails from "../data/profileDetails";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { GlobalStyles } from "../constents/styles";
import CustomText from "../components/CustomText/CustomText";
import cameraIcon from "../assets/profile/Camera.png";
import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import Button from "../UI/Button";
import MyTextInput from "../components/MyTextInput/MyTextInput";
import PageLayout from "../components/PageLayout/PageLayout";
import PageHeader from "../components/PageHeader/PageHeader";

export default function EditProfile({navigation}) {
  const [name, setName] = useState(profileDetails.name);
  const [phone, setPhone] = useState(profileDetails.phone);
  const [email, setEmail] = useState(profileDetails.email);
  const [dob, setDob] = useState(profileDetails.dob);
  const [gender, setGender] = useState(profileDetails.gender);
  const [profile, setProfile] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfile(result.assets[0].uri);
    }
  };

  const handleUpdate = () => {
    navigation.navigate("TrackYourOrder");
  }

  const handleCancle = () => {
    navigation.navigate("Profile");
  }

  return (
    <PageLayout>
      <PageHeader title="Edit Profile" isBellIcon={bellIcon} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView>
        <View style={styles.profileDetailsContainer}>
          <View style={styles.centerAlignContainer}>
            <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: profile }}
                alt="Profile"
              />
              <Image
                style={styles.cameraIcon}
                source={cameraIcon}
                alt="Camera"
              />
            </TouchableOpacity>
          </View>
          <MyTextInput label="Name" onChangeText={setName} value={name} />
          <MyTextInput
            label="Mobile Number"
            onChangeText={setPhone}
            value={phone}
          />
          <MyTextInput
            label="Email Address"
            onChangeText={setEmail}
            value={email}
          />
          <MyTextInput
            label="Date of Birth"
            onChangeText={setDob}
            value={dob}
          />
          <MyTextInput label="Gender" onChangeText={setGender} value={gender} />
          <View style={styles.buttonContainer}>
            <Button style={[styles.cancleButton, styles.button]} onPress={handleCancle}>
              <CustomText style={styles.cancleText} > Cancle </CustomText>
            </Button>
            <Button style={styles.button} onPress={handleUpdate}>Update</Button>
          </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  image: {
    marginTop: 40,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  imageContainer: {
    position: "relative",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    padding: 5,
  },
  centerAlignContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileDetailsContainer: {
    justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    gap: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cancleButton: {
    backgroundColor: GlobalStyles.colors.cancleButtonBackground,
  },
  cancleText: {
    color: GlobalStyles.colors.buttonActiveColor,
  },
  button: {
    borderRadius: 10,
    width: 130,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
