import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import CustomText from "../CustomText/CustomText";
import MarginLeftLayout from "../MarginLeftLayout/MarginLeftLayout";
import itemDetails from "../../data/itemDetails";
import Button from "../Button/Button";
import { addItemsToCart } from "../../reducer/action";
import { useNavigation } from "@react-navigation/native";

export default function PreOrder() {
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getItemDetails = (itemId) => {
    return itemDetails.find((item) => item.id === parseInt(itemId));
  };

  const handleReOrder = (orderItems) => {
    const itemsToReorder = orderItems.map((item) => ({
      id: item.id,
      count: item.count,
    }));
    dispatch(addItemsToCart(itemsToReorder));
    navigation.navigate("MyCart");
  };

  return (
    <MarginLeftLayout>
      <ScrollView>
        {orders.map((order) => {
          const totalSum = order.items.reduce((sum, item) => {
            const itemDetail = getItemDetails(item.id);
            return sum + (itemDetail ? itemDetail.amount * item.count : 0);
          }, 0);

          return (
            <View key={order.orderId} style={styles.orderContainer}>
              {order.items.map((item) => {
                const itemDetail = getItemDetails(item.id);
                return (
                  itemDetail && (
                    <View key={item.id} style={styles.itemContainer}>
                      <Image
                        source={itemDetail.image}
                        style={styles.itemImage}
                      />
                      <CustomText>{itemDetail.title}</CustomText>
                      <CustomText style={styles.quantity}>
                        Quantity: {item.count}
                      </CustomText>
                      <CustomText style={styles.price}>
                        Price: ${itemDetail.amount.toFixed(2)}
                      </CustomText>
                    </View>
                  )
                );
              })}
              <CustomText style={styles.totalSum}>
                Total: ${totalSum.toFixed(2)}
              </CustomText>
              <Button onPress={() => handleReOrder(order.items)}>Re-Order</Button>
            </View>
          );
        })}
      </ScrollView>
    </MarginLeftLayout>
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 5,
    marginRight: 10,
  },
  quantity: {
    fontSize: 12,
    color: "gray",
  },
  price: {
    fontSize: 12,
    color: "gray",
  },
  totalSum: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
});
