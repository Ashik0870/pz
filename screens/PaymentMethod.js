import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../components/CustomText/CustomText";
import { GlobalStyles } from "../constents/styles";
import BackArrow from "../components/BackArrow/BackArrow";
import paymentMethods from "../data/paymentMethods";
import PaymentMethodLayout from "../components/PaymentMethodLayout/PaymentMethodLayout";
import { useState } from "react";
import PageLayout from "../components/PageLayout/PageLayout";

export default function PaymentMethod({navigation}) {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const handlePaymentMethodSelect = (method) => {
      if (selectedPaymentMethod && selectedPaymentMethod.id === method.id) {
        setSelectedPaymentMethod(null);
      } else {
        // Select the new payment method
        setSelectedPaymentMethod(method);
      }
    };

    const handleOnProceed = () => {
      navigation.navigate("CheckOut");
    }
  
  return (
    <PageLayout>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <BackArrow />
          </TouchableOpacity>
          <CustomText style={styles.headerTitle}>Payment Method</CustomText>
          <View></View>
        </View>
      <View>
        <CustomText style={styles.choosePayment}>Choose a Payment Method</CustomText>
      </View>

      <FlatList
        data={paymentMethods}
        renderItem={({ item }) => (
          <TouchableOpacity >
             <PaymentMethodLayout
            payMethod={item}
            isSelected={selectedPaymentMethod && selectedPaymentMethod.id === item.id}
            onSelect={handlePaymentMethodSelect}
          />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.confirmOrderContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={handleOnProceed}>
            <CustomText style={styles.confirmButtonText}>Confirm order</CustomText>
          </TouchableOpacity>
        </View>
        </PageLayout>
  );
}

const styles = StyleSheet.create({

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
  choosePayment:{
    marginLeft: GlobalStyles.margin.marginLeft,
    marginTop: 20,
    fontWeight: "600",
    fontSize: 16,
  },
  confirmOrderContainer: {
    width: "100%",
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: GlobalStyles.colors.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  confirmButtonText: {
    color: GlobalStyles.colors.buttonText,
    fontSize: 16,
    fontWeight: "700",
  },
});
