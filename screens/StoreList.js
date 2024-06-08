import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import SearchBar from "../components/SearchBar/SearchBar";
import BackArrow from "../components/BackArrow/BackArrow";
import CustomText from "../components/CustomText/CustomText";
import Button from "../components/Button/Button";
import { GlobalStyles } from "../constents/styles";
import { useState } from "react";
import storeDetails from "../data/storeDetails";
import StoreItem from "../components/StoreItem/StoreItem";
import PageLayout from "../components/PageLayout/PageLayout";

export default function StoreList({ navigation }) {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  const navigateToItemList = (itemId) => {
    console.log("yes");
    navigation.navigate("ItemList", { itemId });
  };

  return (
    <PageLayout>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackArrow />
        </TouchableOpacity>
        <SearchBar />
      </View>
      <View style={styles.filter}>
        <CustomText style={styles.sortBy}>Sort By</CustomText>
        <Button
          label="Related"
          isActive={activeButton === "Related"}
          onPress={() => handleButtonClick("Related")}
        />
        <Button
          label="Nearest"
          isActive={activeButton === "Nearest"}
          onPress={() => handleButtonClick("Nearest")}
        />
        <Button
          label="Bestsellers"
          isActive={activeButton === "Bestsellers"}
          onPress={() => handleButtonClick("Bestsellers")}
        />
        <TouchableOpacity onPress={() => setActiveButton(null)}>
          <CustomText style={styles.clearButton}>Clear</CustomText>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={storeDetails}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToItemList(item.id)}>
              <StoreItem
                item={item}
                // onPress={() => navigateToItemList(item.id)}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  backButton: {
    alignItems: "center",
  },
  sortBy: {
    marginLeft: 20,
    fontWeight: "500",
    fontSize: 14,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  clearButton: {
    color: GlobalStyles.colors.labelColorWhenSelected,
  },
});
