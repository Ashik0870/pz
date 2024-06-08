import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import CustomText from "../CustomText/CustomText";

export default OnBoardingItems = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 0.1 }}>
        <CustomText style={styles.title}>{item.title}</CustomText>
      </View>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.1 }}>
        <CustomText style={styles.description}>{item.description}</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  image: {
    // flex: 0.7,
    // justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    height: 36,
    color: "rgba(0, 0, 0, 1)",
  },
  description: {
    fontWeight: "400",
    fontSize: 14,
    alignItems: "center",
    color: "rgba(0, 0, 0, 1)",
    paddingHorizontal: 64,
  },
});
