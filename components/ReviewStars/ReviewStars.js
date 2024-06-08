import { Image, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constents/styles";
import CustomText from "../CustomText/CustomText";

export default function ReviewStars({ star }) {
  return (
    <View style={styles.container}>
      <View>
        <CustomText style={styles.star}>{star} </CustomText>
      </View>
      <View>
        <Image source={require("../../assets/home/star.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 55,
    backgroundColor: GlobalStyles.colors.reviewStarBgColor,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  star: {
    color: GlobalStyles.colors.primaryColor,
    fontSize: 14,
    fontWeight: "700",
  },
});
