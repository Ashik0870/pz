// import {
//   Image,
//   Modal,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import BackArrow from "../components/BackArrow/BackArrow";
// import bellIcon from "../assets/Mycart/bell.jpg";
// import CustomText from "../components/CustomText/CustomText";
// import { GlobalStyles } from "../constents/styles";
// import { useAppContext } from "../store/AppContext";
// import itemDetails from "../data/itemDetails";
// import CartItem from "../components/CartItem/CartItem";
// import CouponApply from "../components/CouponApply/CouponApply";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Swipeable } from 'react-native-gesture-handler';
// import {
//   addItemsToOrder,
//   addItemsToPreorders,
//   clearCartAfterConfirm,
// } from "../reducer/action";
// import PageHeader from "../components/PageHeader/PageHeader";
// import PageLayout from "../components/PageLayout/PageLayout";
// import LottieView from "lottie-react-native";
// import OrderSuccessfull from "../components/OrderSuccessfull/OrderSuccessfull";

// export default function MyCart({ navigation }) {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const itemCounts = useSelector((state) => state.itemCounts);
//   const dispatch = useDispatch();

//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     calculateTotalAmount();
//   }, [itemCounts]);

//   const calculateTotalAmount = () => {
//     let total = 0;

//     Object.keys(itemCounts).forEach((itemId) => {
//       const itemData = itemDetails.find((item) => item.id === parseInt(itemId));
//       const count = itemCounts[itemId] || 0;

//       if (itemData) {
//         total += itemData.amount * count;
//       }
//     });
//     setTotalAmount(total);
//   };

//   const handleConfirm = () => {
//     const itemsInCart = Object.keys(itemCounts).map((itemId) => ({
//       id: itemId,
//       count: itemCounts[itemId],
//     }));

//     dispatch(addItemsToOrder(itemsInCart));
//     dispatch(clearCartAfterConfirm());

//     setIsModalVisible(true);
//   };

//   const handleModalConfirm = () => {
//     setIsModalVisible(false);
//     navigation.navigate("Bookings");
//   };

//   const renderRightActions = (progress, dragX) => {
//     return (
//       <View style={styles.rightAction}>
//         <Text style={styles.actionText}>Delete</Text>
//       </View>
//     );
//   };

//   const itemIds = Object.keys(itemCounts);

//   return (
//     <PageLayout>
//       <PageHeader title="My Cart" isBellIcon={bellIcon} />
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {itemIds.map((itemId) => {
//           const itemData = itemDetails.find(
//             (item) => item.id === parseInt(itemId)
//           );
//           const count = itemCounts[itemId] || 0;

//           if (itemData) {
//             return (
//               <Swipeable
//                 key={itemId}
//                 renderRightActions={renderRightActions}
//                 onSwipeableRightOpen={() => dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: itemId })}
//               >
//                 <CartItem item={itemData} />
//               </Swipeable>
//             );
//           }
//           return null;
//         })}
//       </ScrollView>
//       <View style={styles.bottomSheet}>
//         <CouponApply totalAmount={totalAmount} onPress={handleConfirm} />
//       </View>
//       {isModalVisible && (
//         <OrderSuccessfull
//           isModalVisible={isModalVisible}
//           setIsModalVisible={setIsModalVisible}
//           onConfirm={handleModalConfirm}
//         />
//       )}
//     </PageLayout>
//   );
// }

// const styles = StyleSheet.create({
//   scrollViewContent: {
//     paddingBottom: 20,
//   },
//   bottomSheet: {
//     bottom: 0,
//     width: "100%",
//     height: 450,
//     backgroundColor: GlobalStyles.colors.paymentMethodBackClr,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//   },
//   rightAction: {
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     padding: 20,
//   },
//   actionText: {
//     color: 'white',
//     fontWeight: '600',
//   },
// });




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
import deleteIcon from "../assets/Mycart/deleteIcon.png"
import {
  addItemsToOrder,
  addItemsToPreorders,
  clearCartAfterConfirm,
  removeItemFromCart,
} from "../reducer/action";
import PageHeader from "../components/PageHeader/PageHeader";
import PageLayout from "../components/PageLayout/PageLayout";
import LottieView from "lottie-react-native";
import OrderSuccessfull from "../components/OrderSuccessfull/OrderSuccessfull";
import { Swipeable } from "react-native-gesture-handler";

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

 
  const renderRightActions = (itemId) => (
    <TouchableOpacity onPress={() => dispatch(removeItemFromCart(itemId))} style={styles.rightAction}>
      {console.log("item Id = " + itemId)}
      <Image source={deleteIcon} alt="Delete Icon" style={styles.deleteImage} />
    </TouchableOpacity>
  );

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

          {console.log("item Id inside = " + itemId)}

          if (itemData) {
            return (
              <Swipeable
                key={itemId}
                renderRightActions={() => renderRightActions(itemId)}
              >
                <CartItem item={itemData} />
              </Swipeable>
            );
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
    // paddingHorizontal: 20,
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
  rightAction: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteImage:{
    height:40,
    width: 40
  }
});
