import { configureStore } from '@reduxjs/toolkit';

import { rowsApi } from './rtk/rowsApiQuerys';

import mainSlice from './slices/mainSlice';

const store = configureStore({
  reducer: {
    main: mainSlice,
    [rowsApi.reducerPath]: rowsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    rowsApi.middleware,
  ]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
