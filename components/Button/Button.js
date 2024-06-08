import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import { GlobalStyles } from "../../constents/styles";

export default function Button({ label, isActive, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style, isActive ? styles.activeContainer : null]}>
      <CustomText style={isActive ? styles.activeText : null}>{label}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.buttonBorderColor,
    alignItems: "center",
    justifyContent: "center",
  },
  activeContainer: {
    backgroundColor: GlobalStyles.colors.buttonActiveColor,
  },
  activeText: {
    color: GlobalStyles.colors.primaryColor,
  },
});
