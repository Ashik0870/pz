import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../constents/styles';
import CustomText from '../CustomText/CustomText';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MyTextInput = ({ label, placeholder, onChangeText, value, type, keyboardType }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(type === "password");

  const toggleSecureEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };


  return (
    <View style={styles.container}>
      <CustomText style={[styles.label]}>
        {label}
      </CustomText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {type === "password" && (
        <TouchableOpacity onPress={toggleSecureEntry} style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
            size={24}
            color={GlobalStyles.colors.borderColorWhenNotSelected}
          />
        </TouchableOpacity>
      )}
       {type === 'phone' && (
          <MaterialCommunityIcons
            name="phone"
            size={20}
            color={GlobalStyles.colors.borderColorWhenNotSelected} 
            style={styles.iconContainer}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    height: 60,
  },
  label: {
    display: "flex",
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: GlobalStyles.colors.backgroundColor,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    zIndex: 1,
    fontWeight: 500,
    fontSize: 14,
    color: GlobalStyles.colors.titleColor,
  },
  isFocused:{
    color: GlobalStyles.colors.titleColor
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.inputBorder,
    paddingLeft: 25,
    fontSize: 16,
    color: GlobalStyles.colors.titleColor,
  },
  focusedInput: {
    borderColor: '#007bff',
  },
  iconContainer: {
    position: "absolute",
    top: 18,
    right: 10,
  },
});

export default MyTextInput;
