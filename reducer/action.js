export const incrementCount = (itemId) => ({
    type: 'INCREMENT_COUNT',
    itemId,
  });
  
  export const decrementCount = (itemId) => ({
    type: 'DECREMENT_COUNT',
    itemId,
  });
  
  export const removeItemFromCart = (itemId) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    itemId,
  });
  
  export const addItemToData = (newItem) => ({
    type: 'ADD_ITEM_TO_DATA',
    newItem,
  });

  export const addItemsToPreorders = (items) => ({
    type: 'ADD_ITEMS_TO_PREORDERS',
    items,
  });
  
  export const clearCartAfterConfirm = () => ({
    type: 'CLEAR_CART_AFTER_CONFIRM',
  });

  export const addItemsToOrder = (orderItems) => ({
    type: 'ADD_ITEMS_TO_ORDER',
    payload: orderItems,
  });

  export const addItemsToCart = (items) => ({
    type: 'ADD_ITEMS_TO_CART',
    payload: items,
  });