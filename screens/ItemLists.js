import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import SearchBar from "../components/SearchBar/SearchBar";
import BackArrow from "../components/BackArrow/BackArrow";
import CustomText from "../components/CustomText/CustomText";
import Items from "../components/Items/Items";
import { GlobalStyles } from "../constents/styles";
import itemDetails from "../data/itemDetails";
import ItemModel from "../components/ItemModel/ItemModel";
import { useFocusEffect } from "@react-navigation/native";
import PageLayout from "../components/PageLayout/PageLayout";

const windowHeight = Dimensions.get("window").height;

export default function ItemList({ route, navigation }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { itemId } = route.params;

  console.log("This is " + itemId);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalVisible(false);
  };

  const handleModalPress = () => {
    closeModal();
  };

  console.log("isModalVisible:", isModalVisible);
  console.log("selectedItem:", selectedItem);

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
      <View style={styles.container}>
        <CustomText style={styles.recommend}>Recommended</CustomText>
        <FlatList
          data={itemDetails}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemClick(item)}>
              <Items item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <ItemModel
          visible={isModalVisible}
          item={selectedItem}
          onClose={closeModal}
        />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingLeft: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  recommend: {
    marginTop: 15,
    marginLeft: GlobalStyles.margin.marginLeft,
    fontSize: 14,
    fontWeight: "700",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    bottom: 0,
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    maxHeight: windowHeight * 0.7,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: GlobalStyles.colors.primaryColor,
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  backButton: {
    alignItems: "center",
  },
});
