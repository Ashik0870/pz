import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constents/styles";

export default function MarginLeftLayout({children}) {
    return <View style={styles.contsinet}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    contsinet:{
        marginLeft: GlobalStyles.margin.marginLeft,
    }
})