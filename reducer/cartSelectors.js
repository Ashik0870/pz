import { createSelector } from 'reselect';
import itemDetails from '../data/itemDetails';

const selectItemCountMap = state => state.items.itemCounts;

export const selectTotalAmount = createSelector(
  selectItemCountMap,
  itemCounts => {
    let total = 0;

    Object.keys(itemCounts).forEach(itemId => {
      const itemData = itemDetails.find(item => item.id === parseInt(itemId));
      const count = itemCounts[itemId] || 0;

      if (itemData) {
        total += itemData.amount * count;
      }
    });

    return total;
  }
);
