import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constents/styles';
import CustomText from '../CustomText/CustomText';

const InputField = ({ title, placeholder , onChange , value , keyboardType, maxLength }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        keyboardType={keyboardType}
        value={value}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 20,
    height: 40,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
    color: GlobalStyles.colors.titleColor,
  },
  input: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.titleColor,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});

export default InputField;
