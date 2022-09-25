import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from './actions/getCrypto';

const store = configureStore({
    reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware)
});

export default store;

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']
