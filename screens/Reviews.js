import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import PageLayout from "../components/PageLayout/PageLayout";
import PageHeader from "../components/PageHeader/PageHeader";
import bellIcon from "../assets/Mycart/bell.jpg";
import CustomText from "../components/CustomText/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../constents/styles";
import reviews from "../data/reviews";
import ReviewItem from "../components/ReviewItem/ReviewItem";
import Button from "../components/Button/Button";

export default function Reviews() {
  return (
    <PageLayout>
      <PageHeader title="Reviews" isBellIcon={bellIcon} />
      <View style={styles.container}>
        <View style={styles.reviewContainer}>
          <CustomText style={styles.overallReviewText}>4.2</CustomText>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name={star <= 4 ? "star" : "star-outline"}
                size={30}
                color={GlobalStyles.colors.starColor}
                style={styles.star}
              />
            ))}
          </View>
        </View>
        <CustomText style={styles.noOfReview}>120 Reviews</CustomText>
      </View>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReviewItem review={item} />}
      />
      <View style={styles.plusButton}>
      <Button >Ashik</Button>
      </View>
    </PageLayout>
  );
}


const styles = StyleSheet.create({
  stars: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    marginHorizontal: 5,
  },
  container: {
    marginLeft: GlobalStyles.margin.marginLeft,
  },
  overallReviewText: {
    fontSize: 36,
    fontWeight: "700",
  },
  reviewContainer: {
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  noOfReview: {
    fontSize: 12,
    color: GlobalStyles.colors.continueTextColor,
  },
  plusButton:{
    width: 75,
    height: 75,
    borderRadius: 37.5,
    // backgroundColor: GlobalStyles.colors.buttonActiveColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  
});
