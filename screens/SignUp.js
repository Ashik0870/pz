import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import SignInLayout from "../components/SignInLayout/SignInLayout";
import MyTextInput from "../components/MyTextInput/MyTextInput";
import CustomText from "../components/CustomText/CustomText";
import { GlobalStyles } from "../constents/styles";
import { useState } from "react";

export default function SingUp({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignIn = () => {
    navigation.navigate("OTP", { phoneNumber });
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: GlobalStyles.colors.backgroundColor }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
      <SignInLayout
        type="signUp"
        label="Welcome to Pets"
        description="Please enter your sign in details."
        buttonLabel="Sign Up"
        onSignin={handleSignIn}
        
      >
        <View style={styles.inputContainer}>
          <MyTextInput
            label="Phone Number"
            placeholder="Enter Phone Number"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            type="phone"
            keyboardType="phone-pad"
          />
          <MyTextInput
            label="Password"
            placeholder="Enter Password"
            type="password"
            onChangeText={setPassword}
            value={password}
          />
          <MyTextInput
            label="Re-Enter Password"
            placeholder="Re-Enter Password"
            type="password"
            onChangeText={setRePassword}
            value={rePassword}
          />
        </View>
      </SignInLayout>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
    gap: 40,
  },
  forgotContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 25,
    marginTop: 10,
  },
  forgotPass: {
    fontSize: 14,
    fontWeight: "500",
  },
});
