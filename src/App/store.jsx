import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/Api"; // Ensure you are importing api correctly
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(cryptoApi.middleware),
});

setupListeners(store.dispatch);

export default store;
