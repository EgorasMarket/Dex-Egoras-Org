import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import PairsSlice from "../features/PairsSlice";
import OrderSlice from "../features/orders/OrderSlice";
import TradeSlice from "../features/trades/TradeSlice";
// import productSlice from "../features/products/productSlice";
// import offerSlice from "../features/Offers/offerSlice";
// import TradeSlice from "../features/Trades/TradeSlice";

const pairsConfig = {
  key: "pairs",
  storage: storage,
};

const orderConfig = {
  key: "orders",
  storage,
};

const tradeConfig = {
  key: "trades",
  storage,
};

const persistPairs = persistReducer(pairsConfig, PairsSlice);
const persistOrders = persistReducer(orderConfig, OrderSlice);
const persistTrades = persistReducer(tradeConfig, TradeSlice);

// const persistedReducer = persistReducer(persistConfig, initSlice);
// const productPersisted = persistReducer(productConfig, productSlice);
// const persistOffer = persistReducer(offerConfig, offerSlice);

export const store = configureStore({
  reducer: {
    pairs: persistPairs,
    orders: persistOrders,
    // init: persistedReducer,
    // product: productPersisted,
    // offers: persistOffer,
    // trades: persistTrade,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});

export const persistor = persistStore(store);