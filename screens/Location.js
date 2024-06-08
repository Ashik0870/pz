import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import item from "../data/address"
import { GlobalStyles } from "../constents/styles";
import Button from "../UI/Button";

export default function Address({navigation}) {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container1}>
      <Text onPress={() => navigation.navigate("AddAddress")} style={styles.skip}>
        NEXT
      </Text>
      <View style={[styles.container, { width }]}>
        <View style={{ flex: 0.1 }}>
          <Text style={styles.title}>{item[0].title}</Text>
        </View>
        <Image
          source={item[0].image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
        <View style={{ flex: 0.1 }}>
          <Text style={styles.description}>{item[0].description}</Text>
        </View>
      </View>
      <Button style={styles.button}>Use Current Location</Button>
    </View>
  );
}

export const styles = StyleSheet.create({
  container1: {
    marginTop: 70,
    flex: 0.8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  skip: {
    marginLeft: 240,
    fontWeight: "400",
    fontSize: 18,
    // fontFamily: customFont,
    color: GlobalStyles.colors.skipColor,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 45,
  },
  container: {
    // flex: 0.7,
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
    color: GlobalStyles.colors.titleColor,

  },
  description: {
    fontWeight: "400",
    fontSize: 14,
    alignItems: "center",
    color: GlobalStyles.colors.descriptionColor,
    paddingHorizontal: 64,
  },
});
