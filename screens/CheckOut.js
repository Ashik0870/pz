import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import BackArrow from "../components/BackArrow/BackArrow";
import CustomText from "../components/CustomText/CustomText";
import { GlobalStyles } from "../constents/styles";
import InputField from "../components/InputFiled/InputField";
import { useState } from "react";
import MyTextInput from "../components/MyTextInput/MyTextInput";

export default function CheckOut({navigation}) {
  const [creditCardNumber, setCreditCardNumber] = useState();
  const [cardHolderName, setCardHolderName] = useState("");
  const [MM, setMM] = useState();
  const [YY, setYY] = useState();
  const [CVV, setCVV] = useState();
  const [isSelected, setSelection] = useState(false);

  const handleCreditCardChange = (text) => {
    const formattedText = text.replace(/\D/g, "");
    const formattedCreditCard = formattedText.replace(/(\d{4})/g, "$1 ").trim();

    setCreditCardNumber(formattedCreditCard);
  };

  const handleCardHolderNameChange = (text) => {
    setCardHolderName(text);
  };

  const handelMMChange = (text) => {
    setMM(text);
  };

  const handelYYChange = (text) => {
    setYY(text);
  };

  const handelCVVChange = (text) => {
    setCVV(text);
  };

  console.log(
    creditCardNumber + " " + cardHolderName + " " + MM + " " + YY + " " + CVV
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackArrow />
        </TouchableOpacity>
        <CustomText style={styles.headerTitle}>Check out</CustomText>
        <View></View>
      </View>

      <InputField
        title="Credit Card Number"
        placeholder="XXXX XXXX XXXX XXXX"
        onChange={handleCreditCardChange}
        keyboardType="phone-pad"
        value={creditCardNumber}
        maxLength={14}
      />

      <InputField
        title="Cardholder's Name as per the Card"
        placeholder="eg. John Creston "
        onChange={handleCardHolderNameChange}
        value={cardHolderName}
      />
      <View style={styles.outerExpContainer}>
        <View>
          <CustomText style={styles.expTitle}>Expiry Date</CustomText>
          <View style={styles.MMYYcontainer}>
            <TextInput
              style={styles.input}
              placeholder="MM"
              keyboardType="phone-pad"
              maxLength={2}
              onChangeText={handelMMChange}
              value={MM}
            />
            <TextInput
              style={styles.input}
              placeholder="YY"
              keyboardType="phone-pad"
              maxLength={2}
              onChangeText={handelYYChange}
              value={YY}
            />
          </View>
        </View>
        <View>
          <CustomText style={styles.expTitle}>CVV</CustomText>
          <TextInput
            style={[styles.input, styles.CVV]}
            placeholder="XXX"
            keyboardType="phone-pad"
            maxLength={3}
            onChangeText={handelCVVChange}
            value={CVV}
          />
        </View>
      </View>
      <View style={styles.rememberContainer}>
        <View style={styles.checkBoxContainer}>
          
          <CustomText style={styles.remenberTitle}>
            Remember this card for the next time
          </CustomText>
        </View>

        <CustomText style={styles.rememberDescription}>
          We care a lot about your privacy. That’s why we do npt keep any of
          your information unless you ask for it.
        </CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  outerExpContainer: {
    marginHorizontal: GlobalStyles.margin.marginLeft,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: GlobalStyles.colors.titleColor,
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.titleColor,
    borderRadius: 4,
    height: 40,
    width: 70,
    fontSize: 16,
    textAlign: "center",
  },
  CVV: {
    height: 40,
    width: 110,
  },
  MMYYcontainer: {
    flexDirection: "row",
    gap: 15,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rememberContainer: {
    marginHorizontal: GlobalStyles.margin.marginLeft,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: GlobalStyles.colors.descriptionColor,
    borderRadius: 4,
  },
  remenberTitle: {
    fontSize: 12,
    fontWeight: "700",
  },
  rememberDescription: {
    fontSize: 10,
    fontWeight: "500",
  },
});
