import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constents/styles";
import CustomLayout from "../CardLayout/CardLayout";
import CustomText from "../CustomText/CustomText";

export default function Foods({ item }) {
  return (
    <CustomLayout
      height={85}
      width="100%"
      // shadowOffset={{ width: 0, height: 6 }}
      // shadowOpacity={0.25}
      alignItems="center"
      justifyContent="center"
      paddingHorizental={20}
    >
      <Image source={item.image} style={styles.image} />
      <CustomText style={styles.title} >{item.title}</CustomText>
    </CustomLayout>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 65,
    width: 65,
  },
  title:{
    alignItems: "center",
  }
});
