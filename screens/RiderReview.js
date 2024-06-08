import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import PageLayout from "../components/PageLayout/PageLayout";
import PageHeader from "../components/PageHeader/PageHeader";
import bellIcon from "../assets/Mycart/bell.jpg";
import { GlobalStyles } from "../constents/styles";
import { riderProfile } from "../data/profileDetails";
import CustomText from "../components/CustomText/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { tipsDetails } from "../data/profileDetails";
import Button from "../UI/Button";

export default function RiderReview({navigation}) {
  const [rating, setRating] = useState(0);
  const [selectedTip, setSelectedTip] = useState(null);

  const handleStarPress = (index) => {
    setRating(index);
  };
    const handleTipPress = (tip) => {
    setSelectedTip(tip);
  };
  const handleSubmitReview = () => {
    navigation.navigate("WriteAReview");
  }

  return (
    <PageLayout>
      <View style={styles.container}>
        <PageHeader
          title="Rider Review"
          isBellIcon={bellIcon}
          textColor={GlobalStyles.colors.primaryColor}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source={riderProfile.image} style={styles.image} />
      </View>
      <View style={styles.riderContainer}>
        <CustomText style={[styles.title]}>{riderProfile.name}</CustomText>
        <CustomText style={[styles.deliveryText]}>Delivery Man</CustomText>
        <View style={styles.orderDeliveredContainer}>
          <Ionicons
            name="checkmark-circle"
            size={20}
            color={GlobalStyles.colors.deliveredTextColor}
          />
          <CustomText style={styles.orderDeliveredText}>
            Order Delivered
          </CustomText>
        </View>
      </View>
      <View style={styles.starContainer}>
        <CustomText style={styles.starTitle}>
          Please Rate Delivery Service
        </CustomText>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
              <Ionicons
                name={star <= rating ? "star" : "star-outline"}
                size={30}
                color={GlobalStyles.colors.starColor}
                style={styles.star}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.tipsContainer}>
        <CustomText style={styles.addTipsTitle}>Add Tips</CustomText>
        <View style={styles.tipsOptions}>
          {tipsDetails.map((tip, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tipButton,
                selectedTip === tip && styles.selectedTipButton,
              ]}
              onPress={() => handleTipPress(tip)}
            >
              <CustomText
                style={[
                  styles.tipText,
                  selectedTip === tip && styles.selectedTipText,
                ]}
              >
                {tip}
              </CustomText>
            </TouchableOpacity>
          ))}
        </View> 
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.submitButton} onPress={handleSubmitReview}>Submit Review</Button>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 190,
    backgroundColor: GlobalStyles.colors.buttonActiveColor,
  },
  imageContainer: {
    position: "absolute",
    top: 145,
    left: "50%",
    transform: [{ translateX: -50 }],
    // alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  riderContainer: {
    alignItems: "center",
    gap: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 16,
  },
  deliveryText: {
    color: GlobalStyles.colors.inputBorderColor,
    fontSize: 14,
  },
  orderDeliveredContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  orderDeliveredText: {
    color: GlobalStyles.colors.deliveredTextColor,
  },
  starContainer: {
    marginTop: 50,
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  starTitle: {
    fontSize: 16,
  },
  stars: {
    flexDirection: "row",
    marginTop: 10,
  },
  star: {
    marginHorizontal: 5,
  },
  tipsContainer: {
    marginLeft: 20,
    marginTop: 50,
  },
  addTipsTitle: {
    fontSize: 18,
  },
  tipsOptions: {
    flexDirection: "row",
    // flexWrap: "wrap",
    marginTop: 10,
    width: "100%",
  },
  tipButton: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.borderColorWhenNotSelected,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  selectedTipButton: {
    borderColor: GlobalStyles.colors.selectedTipColor,
  },
  tipText: {
    fontSize: 16,
    color: GlobalStyles.colors.borderColorWhenNotSelected,
  },
  selectedTipText: {
    color: GlobalStyles.colors.selectedTipColor,
  },
  submitButton:{
    width: 210,
    height: 45,
  },
  buttonContainer:{
    marginTop: 50,
    alignItems: "center",
  }
});
