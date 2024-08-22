import { StyleSheet, Text, TextInput, View } from "react-native";
import SignInLayout from "../components/SignInLayout/SignInLayout";
import { GlobalStyles } from "../constents/styles";
import { createRef, useEffect, useState } from "react";

export default function OTP({ route, navigation }) {
  const { phoneNumber } = route.params;
  const [timer, setTimer] = useState(30); 

  useEffect(() => {
    
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [timer]);

  const [otp, setOtp] = useState(Array(5).fill(''));
  const inputRefs = Array(5).fill().map(() => createRef());

  const handleOTPChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 4) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleNextClick = () => {
    navigation.navigate("Home");
  }
  return (
    <View
      style={{ flex: 1, backgroundColor: GlobalStyles.colors.backgroundColor }}
    >
      <SignInLayout
        label="Enter OTP"
        description={`A verification code has been sent to (+91) ${phoneNumber}`}
        buttonLabel="Next"
        resendTimer={`Resend (${timer}s)`}
        onSignin={handleNextClick}
      >
        <View style={styles.otpContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.otpBox}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(text) => handleOTPChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              value={otp[index]}
            />
          ))}
        </View>
      </SignInLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  otpBox: {
    width: 52,
    height: 58,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.selectButtonNormal,
  },
});
