import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constents/styles";

export default function PageLayout({children}) {
    return <View style={styles.container}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.backgroundColor,
    },
})