
// // import { createStore } from 'redux';
// // import rootReducer from './reducers';

// // const store = createStore(rootReducer); // Create Redux store with root reducer

// // export default store;







// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//     const [itemCounts, setItemCounts] = useState({});
//     const [itemsData, setItemsData] = useState([]);

//   const incrementCount = (itemId) => {
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [itemId]: (prevCounts[itemId] || 0) + 1,
//     }));
//   };

//   const decrementCount = (itemId) => {
//     setItemCounts((prevCounts) => {
//       const updatedCounts = {
//         ...prevCounts,
//         [itemId]: Math.max((prevCounts[itemId] || 0) - 1, 0), 
//       };

//       if (updatedCounts[itemId] === 0) {
//         const { [itemId]: removedItem, ...remainingCounts } = updatedCounts;
//         return remainingCounts;
//       }

//       return updatedCounts;
//     });
//   };


//   const getCountForItem = (itemId) => {
//     return itemCounts[itemId] || 0;
//   };

//   const getItemById = (itemId) => {
//     return itemsData.find((item) => item.id === itemId);
//   };

//   const addItemToData = (newItem) => {
//     setItemsData((prevItems) => [...prevItems, newItem]);
//   };

//   const removeItemFromCart = (itemId) => {
//     setItemCounts((prevCounts) => {
//       const updatedCounts = { ...prevCounts };
//       delete updatedCounts[itemId];
//       return updatedCounts;
//     });
//   };

//   const contextValue = {
//     itemCounts,
//     incrementCount,
//     decrementCount,
//     getCountForItem,
//     getItemById,
//     addItemToData,
//     removeItemFromCart,
//   };

//   return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
// };

// export const useAppContext = () => useContext(AppContext);


import { createStore } from 'redux';
import rootReducer from '../reducer';

const store = createStore(rootReducer);

export default store;
