import { StyleSheet, Text, View } from "react-native";
import CustomText from "../CustomText/CustomText";

export default function TitleDescription() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Delivery Location</CustomText>
      <CustomText style={styles.description}>
        F Block, 123 Main Street, New York, NY10030
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
 
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    fontWeight: '500',
  },
});
