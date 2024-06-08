import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  Image,
} from "react-native";
import { GlobalStyles } from "../../constents/styles";
import CustomText from "../CustomText/CustomText";
import location from "../../assets/storeDetails/location-pin.png";
import ReviewStars from "../ReviewStars/ReviewStars";
import AddCountingBtn from "../AddCountingBtn/AddCountingBtn";
import { useAppContext } from "../../store/AppContext";
import { useNavigation } from '@react-navigation/native'; 
import LineSaperator from "../LineSaperator/LineSaperator";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../../reducer/action";

const windowHeight = Dimensions.get("window").height;

const ItemModel = ({ visible, item, onClose }) => {
  if (!visible) {
    return null;
  }

  // const { getCountForItem, incrementCount, decrementCount } = useAppContext();

  const count = useSelector(state => state.itemCounts[item.id] || 0);
  const dispatch = useDispatch();

  // const count = getCountForItem(item.id);
  const navigation = useNavigation(); 

  // const handleIncrementClick = () => {
  //   incrementCount(item.id);
  // };

  // const handleDecrementClick = () => {
  //   decrementCount(item.id);
  // };

  const handleIncrementClick = () => {
    dispatch(incrementCount(item.id));
  };

  const handleDecrementClick = () => {
    dispatch(decrementCount(item.id));
  };

  const handleAddToCart = () => {
    count === 0 && dispatch(incrementCount(item.id));
    navigation.navigate('MyCart');
  };

  const classes={
    width: "100%",
  }

  const counterExternalStyles={
    gap: 20,
  }

  const textStyles={
    color: GlobalStyles.colors.buttonActiveColor,
    fontSize: 16,
    fontWeight: "400",
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <View style={styles.outerXContainer}>
              <View style={styles.innerXContainer}>
                <View style={styles.innerContainer}>
                  <CustomText style={styles.cancelButtonText}>x</CustomText>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {item && (
            <>
              <Image source={item.image} alt="Image" style={styles.image} />
              <View style={styles.titleContainer}>
                <CustomText style={styles.modalTitle}>{item.title}</CustomText>
                <CustomText style={styles.amount}>₹ {item.amount}</CustomText>
              </View>
              <View style={styles.ModelLocationContainer}>
                <View style={styles.locationContainer}>
                  <Image source={location} alt="Location" />
                  <CustomText style={styles.location}>
                    {item.location}
                  </CustomText>
                </View>
                <View>
                  <ReviewStars star={item.stars} />
                </View>
              </View>

              <CustomText style={styles.modalDescription}>
                {item.description}
              </CustomText>

             <LineSaperator backgroundColor={GlobalStyles.colors.selectButtonNormal} marginVertical={10} />

              <View style={styles.addButtonContainer}>
                <View style={styles.addButton}>
                  <AddCountingBtn
                    count={count}
                    onAdd={handleIncrementClick}
                    onIncrement={handleIncrementClick}
                    onDecrement={handleDecrementClick}
                    classes={classes}
                    counterExternalStyles={counterExternalStyles}
                    textStyles={textStyles}
                  />
                </View>
                <TouchableOpacity
                  style={styles.addToCartContainer}
                  onPress={handleAddToCart}
                >
                  <CustomText style={styles.addToCart}>
                    Add to Cart {count === 0 ? "" : count * item.amount}
                  </CustomText>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    justifyContent: "flex-end",
    
  },
  modalContainer: {
    bottom: 0,
    backgroundColor: GlobalStyles.colors.primaryColor,
    width: "100%",
    Height: windowHeight * 0.7,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  outerXContainer:{
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    
    borderColor: GlobalStyles.colors.buttonActiveColor,
    height: 75,
    width: 75,
    borderRadius: 37.5,
  },
  innerXContainer:{
    backgroundColor: GlobalStyles.colors.buttonActiveColor,
    height: 65,
    width: 65,
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer:{
    width: 24,
    height: 24,
    backgroundColor: GlobalStyles.colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: 230,
  },
  location: {
    color: GlobalStyles.colors.descriptionColor,
    fontSize: 12,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  amount: {
    fontSize: 18,
    fontWeight: "700",
  },
  ModelLocationContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    alignItems: "center",
  },
  modalDescription: {
    fontSize: 14,
    color: GlobalStyles.colors.descriptionColor,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: GlobalStyles.colors.selectButtonNormal,
    marginVertical: 10,
  },
  addButton: {
    // marginTop: 10,
    width: 95,
    height: 45,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.addButtonModelClr,
    alignItems: "center",
    justifyContent: "center",
  },

  addToCartContainer: {
    width: 200,
    height: 45,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.buttonActiveColor,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCart: {
    color: GlobalStyles.colors.primaryColor,
    fontSize: 16,
  },
  addButtonContainer: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cancelButton: {
    position: "absolute",
    top: -25,
    zIndex: 1,
  },
  cancelButtonText: {
    color: GlobalStyles.colors.buttonActiveColor,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default ItemModel;
