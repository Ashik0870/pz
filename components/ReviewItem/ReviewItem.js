import { Image, ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../../constents/styles";

export default function ReviewItem({ review }) {
  return (
    <View style={styles.reviewItemContainer}>
      <Image source={review.profile} style={styles.profileImage} />
      <View style={styles.reviewContent}>
        <View style={styles.header}>
          <CustomText style={styles.name}>{review.name}</CustomText>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name={star <= review.star ? "star" : "star-outline"}
                size={15}
                color={GlobalStyles.colors.starColor}
                style={styles.star}
              />
            ))}
          </View>
        </View>
        <CustomText style={styles.date}>{review.date}</CustomText>
        <CustomText style={styles.description}>{review.description}</CustomText>
        <CustomText style={styles.showMore}>Show More</CustomText>
        <ScrollView horizontal={true} style={styles.imagesContainer}>
          {review.image.map((img, index) => (
            <Image key={index} source={img} style={styles.reviewImage} />
          ))}
        </ScrollView>
      </View>
    </View>
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
  reviewItemContainer: {
    flexDirection: "row",
    margin: GlobalStyles.margin.marginLeft
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
    color: GlobalStyles.colors.continueTextColor,
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 15,
  },
  showMore:{
    marginTop: 10,
    color: GlobalStyles.colors.showMoreColor,
  },
  imagesContainer: {
    // marginRight: 15,
  },
  reviewImage: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
});
