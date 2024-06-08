import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import noEntry from "../../assets/Mycart/noEntry.png";
import { FrontArrow } from "../BackArrow/BackArrow";
import { GlobalStyles } from "../../constents/styles";
import LineSaperator from "../LineSaperator/LineSaperator";
import { useNavigation } from "@react-navigation/native";


export default function CouponApply({ totalAmount, onPress }) {
  const navigation = useNavigation();
  const discountAmount = 150;

  const deliveryCharge = 10;

  const grandTotal = totalAmount - discountAmount + deliveryCharge;

  // const handleOnProceed = () => {
  //   onPress();
  //   navigation.navigate("PaymentMethod");
  // };

  const handleOnChange = () => {
    console.log("pr");
  };

  return (
    <View style={styles.container}>
      <View style={styles.couponHeader}>
        <View style={styles.couponTitle}>
          <Image source={noEntry} alt="No Entry" style={styles.noEntry} />
          <CustomText style={styles.title}>APPLY COUPON</CustomText>
        </View>
        <TouchableOpacity
        //   onPress={() => navigation.goBack()}
        //   style={styles.backButton}
        >
          <FrontArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.itemTotalContainer}>
        <CustomText style={styles.itemTotal}>Item Total</CustomText>
        <CustomText style={styles.amountTotal}>
          ₹ {totalAmount.toFixed(2)}
        </CustomText>
      </View>
      <View style={styles.discountContainer}>
        <CustomText style={styles.itemTotal}>Discount</CustomText>
        <CustomText style={styles.amountTotal}>
          ₹ {discountAmount.toFixed(2)}
        </CustomText>
      </View>
      <View style={styles.freeDeliveryContainer}>
        {deliveryCharge === 0 ? (
          <>
            <CustomText style={[styles.itemTotal, styles.freeDelivery]}>
              Delivery Free
            </CustomText>
            <CustomText style={[styles.amountTotal, styles.freeDelivery]}>
              Free
            </CustomText>
          </>
        ) : (
          <>
            <CustomText style={[styles.itemTotal, styles.Delivery]}>
              Delivery
            </CustomText>
            <CustomText style={[styles.amountTotal, styles.Delivery]}>
              {deliveryCharge.toFixed(2)}
            </CustomText>
          </>
        )}
      </View>

      <LineSaperator
        backgroundColor={GlobalStyles.colors.couponLineSaperatorBackClr}
        marginVertical={20}
      />
      <View style={styles.discountContainer}>
        <CustomText style={styles.grandTotal}>Grand Total</CustomText>
        <CustomText style={styles.grandTotal}>
          ₹ {grandTotal.toFixed(2)}
        </CustomText>
      </View>

      <LineSaperator
        backgroundColor={GlobalStyles.colors.couponLineSaperatorBackClr}
        marginVertical={20}
      />
      <View style={styles.discountContainer}>
        <CustomText style={styles.itemTotal}>Deliver To: Home</CustomText>
        <TouchableOpacity style={styles.proceedButton} onPress={handleOnChange}>
          <CustomText style={[styles.amountTotal, styles.changeText]}>
            Change
          </CustomText>
        </TouchableOpacity>
      </View>

      <View style={styles.confirmButtonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={onPress}
        >
            <CustomText style={styles.confirmText}>Confirm</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: GlobalStyles.margin.marginLeft,
    marginTop: 56,
  },
  couponHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  couponTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  noEntry: {
    height: 18,
    width: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  itemTotalContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: "500",
  },
  amountTotal: {
    fontSize: 16,
    fontWeight: "500",
  },
  discountContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  freeDeliveryContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  freeDelivery: {
    color: GlobalStyles.colors.freeDeliveryColor,
  },
  Delivery: {},
  grandTotal: {
    fontSize: 18,
    fontWeight: "700",
  },
  confirmButtonContainer: {
    marginTop: 25,
    width: "100%",
    alignItems: "center",
  },
  proceedButton: {
    // justifyContent: "center",
  },
  proceedButtonText: {
    color: GlobalStyles.colors.buttonText,
    fontSize: 16,
    fontWeight: "700",
  },
  confirmButton: {
    width: 200,
    height: 45,
    backgroundColor: GlobalStyles.colors.buttonActiveColor,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  changeText: {
    color: GlobalStyles.colors.buttonActiveColor,
  },
  confirmText:{
    color: GlobalStyles.colors.primaryColor,
  }
});
