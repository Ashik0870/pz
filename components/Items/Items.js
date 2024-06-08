import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import location from "../../assets/storeDetails/location-pin.png";
import clock from "../../assets/storeDetails/clock 1.png";
import { GlobalStyles } from "../../constents/styles";
import stars from "../../assets/storeDetails/star 2.png";
import AddCountingBtn from "../AddCountingBtn/AddCountingBtn";
import { useAppContext } from "../../store/AppContext";

import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../../reducer/action";
import ItemCard from "../ItemCard/ItemCard";

export default function Item({ item }) {
  // const { getCountForItem, incrementCount, decrementCount } = useAppContext();

  const count = useSelector((state) => state.itemCounts[item.id] || 0);
  const dispatch = useDispatch();

  // const count = getCountForItem(item.id);

  function renderStars() {
    const filledStars = parseInt(item.stars);
    const totalStars = 5;

    const starComponents = [];

    for (let i = 0; i < filledStars; i++) {
      starComponents.push(
        <Image key={i} source={stars} style={styles.starIcon} />
      );
    }

    for (let i = filledStars; i < totalStars; i++) {
      starComponents.push(
        <Image key={i} source={location} style={styles.starIcon} />
      );
    }

    return starComponents;
  }

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

  const classes = {
    width: 55,
    height: 25,
    borderWidth: 0.4,
    borderRadius: 10,
    backgroundColor: GlobalStyles.colors.buttonActiveColor,
    borderColor: GlobalStyles.colors.starBorderColor,
  };

  const counterExternalStyles = {
    gap: 10,
  };

  const textStyles = {
    color: GlobalStyles.colors.primaryColor,
  };

  return (
    <ItemCard>
      <View>
        <Image source={item.image} alt="Image" style={styles.image} />
        <View style={styles.ratingContainer}>
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
      </View>
      <View style={styles.innerContainer}>
        <CustomText style={styles.title}>{item.title}</CustomText>
        <CustomText style={styles.description}>{item.description}</CustomText>
        <View style={styles.locationContainer}>
          <View style={styles.renderStars}>{renderStars()}</View>
          <CustomText>{item.ratings}</CustomText>
        </View>
        <CustomText style={styles.amount}>₹ {item.amount}</CustomText>
      </View>
    </ItemCard>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 85,
    height: 85,
    borderRadius: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: "700",
    paddingBottom: 10,
  },
  description: {
    fontSize: 10,
    fontWeight: "400",
  },
  addButton: {
    color: GlobalStyles.colors.primaryColor,
  },
  innerContainer: {
    // paddingRight: 110,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    gap: 10,
  },
  renderStars: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: GlobalStyles.colors.amountColor,
  },
  starIcon: {
    height: 16,
    width: 16,
  },
  rating: {
    width: 55,
    height: 25,
    borderWidth: 0.4,
    borderRadius: 10,

    backgroundColor: GlobalStyles.colors.buttonActiveColor,
    borderColor: GlobalStyles.colors.starBorderColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  ratingContainer: {
    justifyContent: "center",
    alignItems: "center",
    // position: "relative",
  },
  counterContainer: {
    flexDirection: "row",
    gap: 10,
  },
  counterText: {
    color: GlobalStyles.colors.primaryColor,
  },
});
