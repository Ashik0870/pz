import React from "react";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constents/styles";
import { useNavigation } from '@react-navigation/native'; 

const SearchField = () => {
  const navigation = useNavigation(); 
  const handlePress = () => {
    navigation.navigate('StoreList');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={1}>
      <Ionicons
        name="search"
        size={12}
        color={GlobalStyles.colors.searchIconColor}
      />
      <Text style={styles.input}>Search menus</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: 280,
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: GlobalStyles.colors.searchFieldBgColor,
    marginTop: 10,
    gap: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 8,
    color: GlobalStyles.colors.searchIconColor,
  },
});

export default SearchField;
