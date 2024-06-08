import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constents/styles";
import CustomText from "../components/CustomText/CustomText";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View >
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}
      >
        <View style={[styles.button, style, mode === "flat" && styles.flat]}>
          <CustomText style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </CustomText>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    padding: 8,
    backgroundColor: GlobalStyles.colors.buttonBackgroundColor,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
