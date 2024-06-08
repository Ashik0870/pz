import { StyleSheet, View } from "react-native";

export default function ItemCard({children}) {
    return <View style={styles.container}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginTop: 30,
        flexDirection: "row",
        gap: 12,
      },
})