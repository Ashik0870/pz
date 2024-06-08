import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import location from "../../assets/storeDetails/location-pin.png";
import clock from "../../assets/storeDetails/clock 1.png";
import { GlobalStyles } from "../../constents/styles";
import stars from "../../assets/storeDetails/star 2.png";
import AddCountingBtn from "../AddCountingBtn/AddCountingBtn";
// import { useAppContext } from "../../store/AppContext";
import ItemImageRender from "../ItemImageRender/ItemImageRender";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../../reducer/action";
import ItemCard from "../ItemCard/ItemCard";

export default function CartItem({ item }) {
  const count = useSelector((state) => state.itemCounts[item.id] || 0);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(incrementCount(item.id));
  };

  const handleDecrementClick = () => {
    dispatch(decrementCount(item.id));
  };

  const classes = {
    width: 65,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.buttonActiveColor,
  };

  const counterExternalStyles = {
    gap: 10,
  };

  const textStyles = {
    fontWeight: "700",
    color: GlobalStyles.colors.buttonActiveColor,
  };

  return (
    <ItemCard>
      <View>
        <ItemImageRender
          image={item.image}
          starImage={stars}
          stars={item.stars}
        />
      </View>
      <View>
        <View style={styles.innerContainer}>
          <View>
            <CustomText style={styles.title}>{item.title}</CustomText>
            <CustomText style={styles.amount}>₹ {item.amount}</CustomText>
          </View>
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

        <View style={styles.timeContainer}>
          <View style={styles.locationContainer}>
            <Image source={location} alt="Location Image" style={styles.icon} />
            <CustomText>{item.locationDist}</CustomText>
          </View>
          <View style={styles.locationContainer}>
            <Image source={clock} alt="Clock" style={styles.icon} />
            <CustomText>{item.time}</CustomText>
          </View>
        </View>
      </View>
    </ItemCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingRight: 40,
    marginTop: 30,
    flexDirection: "row",
    gap: 12,
  },
  icon: {
    width: 15,
    height: 15,
  },
  timeContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
  },

  title: {
    fontSize: 12,
    fontWeight: "700",
    paddingBottom: 10,
  },

  addButton: {
    color: GlobalStyles.colors.primaryColor,
  },
  innerContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    gap: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: GlobalStyles.colors.amountColor,
  },
  ratingContainer: {
    // justifyContent: "center",
    alignItems: "center",
    // position: "relative",
  },
});
