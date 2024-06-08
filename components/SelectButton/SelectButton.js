import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../constents/styles";
import CustomText from "../CustomText/CustomText";

export default function SelectButton({ image, label, isSelected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isSelected
            ? GlobalStyles.colors.bgColorWhenSelected
            : GlobalStyles.colors.backgroundColor,
          borderColor: isSelected
            ? GlobalStyles.colors.borderColorWhenSelected
            : GlobalStyles.colors.borderColorWhenNotSelected,
        },
      ]}
    >
      <Image source={image} style={styles.image} alt="Home image" />
      <CustomText
        style={[
          styles.label,
          {
            color: isSelected
              ? GlobalStyles.colors.labelColorWhenSelected
              : GlobalStyles.colors.labelColorWhenNotSelected,
          },
        ]}
      >
        {label}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    // height: 10,
    // width: 15,
  },
});
