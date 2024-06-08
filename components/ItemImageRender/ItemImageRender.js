import { Image, StyleSheet, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import { GlobalStyles } from "../../constents/styles";

export default function ItemImageRender({image, stars, starImage}) {
    return (
        <View>
        <Image source={image} alt="Image" style={styles.image} />
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <CustomText>{stars}</CustomText>
            <Image source={starImage} alt="Star" />
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 85,
        height: 85,
        borderRadius: 12,
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
    ratingContainer:{
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }
})