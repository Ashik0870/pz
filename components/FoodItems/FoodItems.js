import { Image, StyleSheet, View } from "react-native";
import CustomLayout from "../CardLayout/CardLayout";
import CustomText from "../CustomText/CustomText";
import { GlobalStyles } from "../../constents/styles";
import ReviewStars from "../ReviewStars/ReviewStars";

export default FoodItems = ({ item, height, width }) => (
    <View>
      <CustomLayout
        height={height}
        width={width}
        borderWidth={1}
        borderRadius={15}
        borderColor={GlobalStyles.colors.searchIconColor}
        // paddingHorizental={20}
      >
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <CustomText style={styles.title}>{item.title}</CustomText>
        <View style={styles.detailsContainer}>
          <View>
            <CustomText style={styles.description}>
              {item.description}
            </CustomText>
            <CustomText style={styles.price}>${item.price}</CustomText>
          </View>
          <ReviewStars star={item.star} />
        </View>
      </CustomLayout>
    </View>
  );

  const styles = StyleSheet.create({
    image: {
        height: "90%",
        width: "90%",
        borderRadius: 15,
        justifyContent: "center",
      },
      imageContainer: {
        // marginTop: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      detailsContainer: {
        width: "100%",
        flexDirection: "row",
        marginHorizontal: 10,
        marginBottom: 10,
        alignItems: "center",
        gap: 30,
        justifyContent: "flex-start",
      },
      title: {
        fontWeight: "500",
        fontSize: 12,
        marginHorizontal: 10,
      },
      description: {
        fontSize: 10,
        fontWeight: "500",
        color: GlobalStyles.colors.descriptionColor,
      },
      price: {
        fontSize: 12,
        fontWeight: "700",
      },
      star:{
        marginLeft: 20,
      },
  })