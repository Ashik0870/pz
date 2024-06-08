import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FoodItems from '../components/FoodItems/FoodItems'; // Adjust the import path if necessary
import PageLayout from '../components/PageLayout/PageLayout';
import PageHeader from '../components/PageHeader/PageHeader';
import fav from '../assets/favorite/fav.png';
import { GlobalStyles } from '../constents/styles';
import foodDetails from '../data/foodDetails';

const ItemSeparator = () => <View style={{ width: 10 }} />; // Adjust the width as necessary

export default function Fav() {
  return (
    <PageLayout>
      <PageHeader title="Favourite" isBellIcon={fav} />
      <View style={styles.container}>
        <FlatList
          data={foodDetails}
          renderItem={({ item }) => <FoodItems item={item} height={230} width={150} />} // Pass height and width here
          keyExtractor={(item) => item.id}
          numColumns={2} // For 2 items in a row
          columnWrapperStyle={styles.columnWrapper} // Ensure the items are spaced out properly
          contentContainerStyle={styles.listContent}
        />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  listContent: {
    paddingVertical: 20,
  },
});
