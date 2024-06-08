import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import location from "../../assets/storeDetails/location-pin.png";
import clock from "../../assets/storeDetails/clock 1.png";
import { GlobalStyles } from "../../constents/styles";
import stars from "../../assets/storeDetails/star 2.png";
import ItemImageRender from "../ItemImageRender/ItemImageRender";
import ItemCard from "../ItemCard/ItemCard";

export default function StoreItem({ item }) {
  return (
    <ItemCard>
      <ItemImageRender
        image={item.image}
        stars={item.stars}
        starImage={stars}
      />
      <View style={styles.innerContainer}>
        <CustomText style={styles.title}>{item.title}</CustomText>
        <CustomText style={styles.description}>{item.description}</CustomText>
        <View style={styles.timeContainer}>
          <View style={styles.locationContainer}>
            <Image source={location} alt="Location Image" style={styles.icon} />
            <CustomText>{item.location}</CustomText>
          </View>
          <View style={styles.locationContainer}>
            <Image source={clock} alt="Clock" style={styles.icon} />
            <CustomText>{item.min}</CustomText>
          </View>
        </View>
        <CustomText>
          <CustomText style={styles.min_Order}>Min Order:</CustomText>
          {" " + item.Min_Order}
        </CustomText>
      </View>
    </ItemCard>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: "space-around",
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: "700",
  },
  description: {
    fontSize: 10,
    fontWeight: "400",
  },
  icon: {
    width: 15,
    height: 15,
  },
  timeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  min_Order: {
    fontSize: 12,
    fontWeight: "700",
  },
  rating: {
    width: 40,
    height: 20,
    borderWidth: 0.4,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.primaryColor,
    borderColor: GlobalStyles.colors.starBorderColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  ratingContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
