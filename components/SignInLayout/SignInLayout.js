import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import petImage from "../../assets/signIn/petImage.png";
import { GlobalStyles } from "../../constents/styles";
import CustomText from "../CustomText/CustomText";
import Button from "../../UI/Button";
import google from "../../assets/signIn/google (2) 1.png";
import { useNavigation } from "@react-navigation/native";

export default function SignInLayout({
  children,
  type,
  label,
  description,
  onSignin,
  buttonLabel,
  resendTimer
}) {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  const handleSignInPress = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.prtContainer}>
        <Image style={styles.image} source={petImage} alt="Pet Image" />
        <CustomText style={styles.pet}>Pets</CustomText>
      </View>
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>{label}</CustomText>
        <CustomText style={styles.description}>{description}</CustomText>
      </View>
      {children}
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={onSignin}>
          {buttonLabel}
        </Button>
      </View>
      {label === "Forgot Password" || label === "Enter OTP" ? (
        <Text></Text>
      ) : (
        <>
          <View>
            <CustomText style={styles.continueText}>
              Or Continue With
            </CustomText>
          </View>
          <View style={styles.imageContainer}>
            <Image source={google} />
          </View>
          {type === "signin" ? (
            <TouchableOpacity onPress={handleSignUpPress}>
              <View>
                <CustomText style={styles.signUpContainer}>
                  Don't have an account?
                  <CustomText style={styles.signUp}> Sign Up</CustomText>
                </CustomText>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSignInPress}>
              <View>
                <CustomText style={styles.signInContainer}>
                  Already have an account?
                  <CustomText style={styles.signIn}> Sign In</CustomText>
                </CustomText>
              </View>
            </TouchableOpacity>
          )}
        </>
      )}
      {label === "Enter OTP" && (
        <View>
          <CustomText style={styles.signInContainer}>
          Didn’t receive the code? 
            <CustomText style={styles.signIn}> {resendTimer}</CustomText>
          </CustomText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  prtContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 75,
    marginLeft: 25,
    gap: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
  pet: {
    fontSize: 26,
    fontWeight: "700",
    color: GlobalStyles.colors.titleColor,
  },
  titleContainer: {
    flexDirection: "column",
    marginLeft: 25,
    marginTop: 30,
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: GlobalStyles.colors.signInTextColor,
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 25,
    color: GlobalStyles.colors.inputBorderColor,
  },
  button: {
    fontSize: 16,
    fontWeight: 400,
    height: 45,
    width: 200,
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 50,
  },
  continueText: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 16,
    fontWeight: 500,
    color: GlobalStyles.colors.continueTextColor,
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpContainer: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 16,
    fontWeight: 500,
    color: GlobalStyles.colors.labelColorWhenNotSelected,
  },
  signUp: {
    color: GlobalStyles.colors.signInTextColor,
  },
  signInContainer: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
    fontWeight: 500,
    color: GlobalStyles.colors.labelColorWhenNotSelected,
  },
  signIn: {
    color: GlobalStyles.colors.signInTextColor,
  },
});
