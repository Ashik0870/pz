
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const CustomText = ({ children, style, ...props }) => {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
});

export default CustomText;
