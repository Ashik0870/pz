import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { GlobalStyles } from '../../constents/styles';

export default function PaymentMethodLayout({ payMethod, isSelected, onSelect }) {
  const handleSelect = () => {
    onSelect(payMethod); // Notify parent component of selection
  };

  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={[styles.container, isSelected && styles.selectedContainer]}>
        
        <Image source={payMethod.image} alt="Image" style={styles.image} />

        <CustomText style={[styles.title, isSelected && styles.selectedTitle]}>{payMethod.title}</CustomText>
        <View style={styles.radioButtonContainer}>
          <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderWidth:1,
    marginLeft: GlobalStyles.margin.marginLeft,
    marginRight: 15,
    marginVertical: 10,
    borderColor: GlobalStyles.colors.paymentMethodBorderClr,
    borderRadius: 4,
  },
  selectedContainer: {
    backgroundColor: GlobalStyles.colors.paymentMethodBackClr, 
    borderRadius: 5,
  },
  radioButton: {
    width: 26,
    height: 26,
    marginRight: 10,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.paymentMethodBorderClr,
    right: 0,
  },
  radioButtonContainer: {
    marginLeft: 'auto', 
  },
  radioButtonSelected: {
    backgroundColor: GlobalStyles.colors.paymentMethodBackClr,
  },
  image: {
    width: 25,
    height: 20,
    marginLeft: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  selectedTitle: {
    color: GlobalStyles.colors.white, // Customize selected text color
  },
});
