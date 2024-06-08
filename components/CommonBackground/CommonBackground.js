// CommonLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constents/styles';

export default function CommonBackground ({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.backgroundColor, 
  },
});


