import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constents/styles";
import PageHeader from "../components/PageHeader/PageHeader";
import bellIcon from "../assets/Mycart/bell.jpg";
import Button from "../UI/Button";

export default function Profile({navigation}) {

    const handleEdit = () => {
        navigation.navigate("EditProfile");
    }
    return <View style={styles.container}>
        <PageHeader title="Profile" isBellIcon={bellIcon} />
        <Button onPress={handleEdit}>Edit</Button>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: GlobalStyles.colors.backgroundColor,
    },
})