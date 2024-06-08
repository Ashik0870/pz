import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackArrow from "../components/BackArrow/BackArrow";
import bellIcon from "../assets/Mycart/bell.jpg";
import CustomText from "../components/CustomText/CustomText";
import { GlobalStyles } from "../constents/styles";
import { useAppContext } from "../store/AppContext";
import itemDetails from "../data/itemDetails";
import CartItem from "../components/CartItem/CartItem";
import CouponApply from "../components/CouponApply/CouponApply";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwipeView } from "react-native-swipe-view";
import {
  addItemsToOrder,
  addItemsToPreorders,
  clearCartAfterConfirm,
} from "../reducer/action";
import PageHeader from "../components/PageHeader/PageHeader";
import PageLayout from "../components/PageLayout/PageLayout";
import LottieView from "lottie-react-native";
import OrderSuccessfull from "../components/OrderSuccessfull/OrderSuccessfull";

export default function MyCart({ navigation }) {
  // const { itemCounts } = useAppContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const itemCounts = useSelector((state) => state.itemCounts);
  const dispatch = useDispatch();

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateTotalAmount();
  }, [itemCounts]);

  const calculateTotalAmount = () => {
    let total = 0;

    Object.keys(itemCounts).forEach((itemId) => {
      const itemData = itemDetails.find((item) => item.id === parseInt(itemId));
      const count = itemCounts[itemId] || 0;

      if (itemData) {
        total += itemData.amount * count;
      }
    });
    setTotalAmount(total);
  };

  const handleConfirm = () => {
    const itemsInCart = Object.keys(itemCounts).map((itemId) => ({
      id: itemId,
      count: itemCounts[itemId],
    }));

    console.log("encounter");

    dispatch(addItemsToOrder(itemsInCart));
    dispatch(clearCartAfterConfirm());

    setIsModalVisible(true);

  };

  const handleModalConfirm = () => {
    setIsModalVisible(false);
    navigation.navigate("Bookings");
  };

  console.log("Total " + totalAmount);

  console.log("itemCounts", JSON.stringify(itemCounts));

  const itemIds = Object.keys(itemCounts);

  return (
    <PageLayout>
      <PageHeader title="My Cart" isBellIcon={bellIcon} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {itemIds.map((itemId) => {
          const itemData = itemDetails.find(
            (item) => item.id === parseInt(itemId)
          );
          const count = itemCounts[itemId] || 0;

          if (itemData) {
            return <CartItem key={itemId} item={itemData} />;
          }
          return null;
        })}
      </ScrollView>
      <View style={styles.bottomSheet}>
        <CouponApply totalAmount={totalAmount} onPress={handleConfirm} />
      </View>
      {isModalVisible && (
        <OrderSuccessfull
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          onConfirm={handleModalConfirm}
        />
      )}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bottomSheet: {
    bottom: 0,
    width: "100%",
    height: 450,
    backgroundColor: GlobalStyles.colors.paymentMethodBackClr,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
