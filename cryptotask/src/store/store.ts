import { portfolioSlice } from './reducers/portfolioSlice'
import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from './actions/getCrypto'

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    portfolio: portfolioSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
// export type AppStore = ReturnType<typeof store>
// export type AppDispatch = AppStore['dispatch']
