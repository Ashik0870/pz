import { StyleSheet, View } from "react-native";

export default function MarginLayout({children}){
    return <View style={styles.container}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
    }
})