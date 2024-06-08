import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constents/styles";
import SignInLayout from "../components/SignInLayout/SignInLayout";
import MyTextInput from "../components/MyTextInput/MyTextInput";
import { useState } from "react";

export default function ForgotPassword({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignIn = () => {
    navigation.navigate("OTP", { phoneNumber });
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: GlobalStyles.colors.backgroundColor }}
    >
      <SignInLayout
        type="signin"
        label="Forgot Password"
        description="Enter your phone number we sent OTP for verification."
        buttonLabel="Sign In"
        onSignin={handleSignIn}
      >
        <View style={styles.inputContainer}>
          <MyTextInput
            label="Phone Number"
            placeholder="Enter Phone Number"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            type="phone"
          />
        </View>
      </SignInLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
    gap: 40,
  },
});
