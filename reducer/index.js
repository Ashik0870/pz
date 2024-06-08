import { combineReducers } from "redux";

const initialItemCountState = {};

const itemCountsReducer = (state = initialItemCountState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        [action.itemId]: (state[action.itemId] || 0) + 1,
      };
    case "DECREMENT_COUNT":
      const updatedCount = Math.max((state[action.itemId] || 0) - 1, 0);
      if (updatedCount === 0) {
        const newState = { ...state };
        delete newState[action.itemId];
        return newState;
      }
      return {
        ...state,
        [action.itemId]: updatedCount,
      };
    case "REMOVE_ITEM_FROM_CART":
      const newState = { ...state };
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
};

const initialItemsState = [];
const itemsReducer = (state = initialItemsState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_DATA":
      return [...state, action.newItem];
    default:
      return state;
  }
};

const initialState = {
  cartItems: [],
  orders: [],
};

function generateOrderId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 8);

  return timestamp + randomString;
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        itemCounts: {},
      };
    case "ADD_ITEMS_TO_ORDER":
      return {
        ...state,
        orders: [
          ...state.orders,
          {
            orderId: generateOrderId(),
            items: action.payload,
          },
        ],
      };
    case "ADD_ITEMS_TO_CART":
      // return {
      //   ...state,
      //   cartItems: [...state.cartItems, ...action.payload],
      // };
      const updatedCartItems = action.payload.map(item => {
        const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
          return { ...existingItem, count: existingItem.count + item.count };
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...state.cartItems.filter(item => !action.payload.find(p => p.id === item.id)), ...updatedCartItems],
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  itemCounts: itemCountsReducer,
  itemsData: itemsReducer,
  cart: cartReducer,
});

export default rootReducer;
