import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../components/CustomText/CustomText";
import { GlobalStyles } from "../constents/styles";
import bellIcon from "../assets/Mycart/bell.jpg";
import PageHeader from "../components/PageHeader/PageHeader";
import PageLayout from "../components/PageLayout/PageLayout";
import PreOrder from "../components/PreOrder/PreOrder";

export default function Orders({ navigation }) {
  const [selectedSection, setSelectedSection] = useState("Pre-Orders");

  console.log(selectedSection);

  return (
      <PageLayout >
      <PageHeader title="My Order"  isBellIcon = {bellIcon}/>
      <View style={styles.renderTitles}>
        <TouchableOpacity
          onPress={() => setSelectedSection("Pre-Orders")}
          style={[
            styles.titleContainer,
            selectedSection === "Pre-Orders" && styles.activeTitleContainer,
          ]}
        >
          <CustomText
            style={[
              styles.titleText,
              selectedSection === "Pre-Orders" && styles.activeTitleText,
            ]}
          >
            Pre-Orders
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedSection("Upcoming")}
          style={[
            styles.titleContainer,
            selectedSection === "Upcoming" && styles.activeTitleContainer,
          ]}
        >
          <CustomText
            style={[
              styles.titleText,
              selectedSection === "Upcoming" && styles.activeTitleText,
            ]}
          >
            Upcoming
          </CustomText>
        </TouchableOpacity>
      </View>
      {selectedSection === 'Pre-Orders' ? <PreOrder /> : <View><CustomText>Upcomming</CustomText></View> }
      </PageLayout>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  bellIcon: {
    width: 22,
    height: 20,
  },
  myOrders: {
    fontSize: 18,
    fontWeight: "500",
  },
  renderTitles: {
    flexDirection: "row",
    marginTop: 25,
    gap: 20,
  },
  titleContainer: {
    marginLeft: GlobalStyles.margin.marginLeft,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  titleText: {
    fontSize: 16,
  },
  activeTitleContainer: {
    borderBottomColor: GlobalStyles.colors.buttonActiveColor,
  },
  activeTitleText: {
    color: GlobalStyles.colors.buttonActiveColor,
  },
  orderContainer: {
    marginBottom: 20,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },
  quantity: {
    fontSize: 12,
    color: "gray",
  },
});
