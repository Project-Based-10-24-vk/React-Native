import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { appApi } from './apiSlice'
import appMainReducer from '~/redux/reducer'

export const store = configureStore({
  reducer: {
    appMain: appMainReducer,
    [appApi.reducerPath]: appApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware)
})

setupListeners(store.dispatch)
