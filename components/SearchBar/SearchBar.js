import React from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constents/styles";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color={GlobalStyles.colors.searchIconColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Store Name"
        placeholderTextColor={GlobalStyles.colors.placeholderColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: GlobalStyles.colors.searchFieldBgColor,
    marginTop: 10,
    borderColor: GlobalStyles.colors.SearchBarBorder,
    gap: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: GlobalStyles.colors.searchIconColor,
  },
});

export default SearchBar;
