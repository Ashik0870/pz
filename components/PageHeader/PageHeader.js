import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import BackArrow from "../BackArrow/BackArrow";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constents/styles";

export default function PageHeader({ title, isBellIcon, textColor }) {
  const navigation = useNavigation();

  const titleColor = {
    color: textColor || GlobalStyles.colors.titleColor,
  };

  const handleNotification = () => {
    navigation.navigate("Notification");
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backButton, titleColor]}
      >
        <BackArrow />
      </TouchableOpacity>
      <CustomText style={[styles.title, titleColor]}>{title}</CustomText>
      {isBellIcon ? (
        <TouchableOpacity onPress={handleNotification}>
          <Image
            source={isBellIcon}
            alt="Bell Icon"
            style={[styles.bellIcon, titleColor]}
          />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
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
  bellIcon: {
    width: 22,
    height: 20,
  },
  title: {
    fontSize: 18,
  },
});
