import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../constents/styles";
import CustomText from "../components/CustomText/CustomText";
import SearchField from "../components/SearchEngine/SearchEngine";
import foodDetails from "../data/foodDetails";
import FoodItems from "../components/FoodItems/FoodItems";
import foods from "../data/foods";
import Foods from "../components/Foods/Foods";
import PageLayout from "../components/PageLayout/PageLayout";

export default function Home({ navigation }) {
  const ItemSeparator = () => <View style={{ width: 25 }} />;
  return (
      <PageLayout>
        <View style={styles.container}>
          <View style={styles.locationContainer}>
            <Image
              style={styles.locationImage}
              source={require("../assets/home/location-pin.png")}
            />
            <CustomText style={styles.address}>
              Spm Road, 2nd Cross, Shimoga
            </CustomText>
            <Image source={require("../assets/home/downArrow.png")} />
          </View>
          <View style={styles.welcomeContainer}>
            <CustomText style={styles.name}>Hi Akash</CustomText>
            <CustomText style={styles.description}>
              What would you like to order today?
            </CustomText>
            <View style={styles.searchContainer}>
              <SearchField />
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            <CustomText style={styles.popular}>Popular Near You</CustomText>
            <View style={styles.foodDetailsContainer}>
              <FlatList
                data={foodDetails}
                renderItem={({ item }) => <FoodItems item={item} height={250} width={250} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={ItemSeparator}
              />
            </View>
          </View>
          <View style={styles.scrollContainer}>
            <CustomText style={styles.popular}>Categories</CustomText>
            <View style={styles.foodDetailsContainer}>
              <FlatList
               data={foods}
               renderItem={Foods}
               keyExtractor={(item) => item.id}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               ItemSeparatorComponent={ItemSeparator}
              />
            </View>
          </View>
        </ScrollView>
      </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    backgroundColor: GlobalStyles.colors.homeWelcomeBackColor,
  },
  locationContainer: {
    marginTop: 40,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  address: {
    color: GlobalStyles.colors.primaryColor,
    fontWeight: "500",
    fontSize: 16,
  },
  locationImage: {
    height: 24,
    width: 24,
  },
  
  welcomeContainer: {
    marginTop: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  name: {
    color: GlobalStyles.colors.textColor,
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    color: GlobalStyles.colors.textColor,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  searchContainer: {
    justifyContent: "center",
  },
  popular: {
    marginTop: 20,
    // marginLeft: 25,
    paddingHorizontal: 20,
    fontWeight: "600",
    fontSize: 16,
  },
  foodDetailsContainer: {
    // marginLeft: 20,
    marginTop: 10,
  },
  scrollContainer: {
    // backgroundColor: GlobalStyles.colors.primaryColor,
    // paddingRight: 20,
  },
});
