import PageHeader from "../components/PageHeader/PageHeader";
import PageLayout from "../components/PageLayout/PageLayout";

import bellIcon from "../assets/Mycart/bell.jpg";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../constents/styles";
import CustomText from "../components/CustomText/CustomText";
import CustomLayout from "../components/CardLayout/CardLayout";
import { riderProfile } from "../data/profileDetails";
import Icon from "react-native-ionicons";

export default function TrackYourOrder({navigation}) {

  const handleRiderPress = () => {
    navigation.navigate("RiderReview");
  }

  return (
    <PageLayout>
      <PageHeader title="Track Your Order" isBellIcon={bellIcon} />
      <View>
        <View style={styles.addressContainer}>
          <CustomText style={styles.addressText}>Address</CustomText>
        </View>
      </View>
      <View style={styles.riderOuterContainer}>
        <TouchableOpacity onPress={handleRiderPress}>
          <CustomLayout
            height={90}
            width={340}
            elevation={40}
            borderRadius={15}
          >
            <View style={styles.riderProfileContainer}>
              <View style={styles.imageContainer}>
                <Image source={riderProfile.image} style={styles.riderImage} />
              </View>
              <View>
                <CustomText style={styles.id}>
                  ID COD-{riderProfile.id}
                </CustomText>
                <CustomText>{riderProfile.name}</CustomText>
              </View>

              {/* <View style={styles.iconContainer}>
                <Icon name="call-outline" size={20} color={GlobalStyles.colors.buttonActiveColor} style={styles.icon} />
                <Icon name="chatbubble-ellipses-outline" size={20} color={GlobalStyles.colors.primaryColor} style={styles.icon} />
              </View> */}
            </View>
          </CustomLayout>
        </TouchableOpacity>
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    width: "100%",
    height: 80,
    backgroundColor: GlobalStyles.colors.buttonActiveColor,
    marginTop: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  addressText: {
    fontSize: 16,
    fontWeight: "500",
    color: GlobalStyles.colors.primaryColor,
  },
  imageContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  riderImage: {
    height: 75,
    width: 75,
    borderRadius: 10,
    // justifyContent: "center",
    // alignItems: "center",
  },
  riderProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  id: {
    fontSize: 16,
    fontWeight: "500",
    color: GlobalStyles.colors.descriptionColor,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  icon: {
    marginLeft: 10,
  },
  riderOuterContainer: {
    alignItems: "center",
  },
});
