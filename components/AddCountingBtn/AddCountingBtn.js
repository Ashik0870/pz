import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import CustomText from "../CustomText/CustomText";
import { GlobalStyles } from "../../constents/styles";

const AddCountingBtn = ({
  count,
  onAdd,
  onIncrement,
  onDecrement,
  classes,
  counterExternalStyles,
  textStyles
}) => {
 
  const addButton = {
    ...textStyles,
  }
  const counterText = {
    ...textStyles,
  }

  return (
    <View style={[styles.rating, classes]}>
      {count == 0 ? (
        <TouchableOpacity onPress={onAdd}>
          <CustomText style={addButton}>Add</CustomText>
        </TouchableOpacity>
      ) : (
        <View style={[styles.counterContainer, counterExternalStyles]}>
          <TouchableOpacity onPress={onDecrement} style={styles.counterButton}>
            <CustomText style={counterText}>-</CustomText>
          </TouchableOpacity>
          <CustomText style={counterText}>{count}</CustomText>
          <TouchableOpacity onPress={onIncrement} style={styles.counterButton}>
            <CustomText style={counterText}>+</CustomText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = {
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  counterContainer: {
    flexDirection: "row",
  },
};

export default AddCountingBtn;
