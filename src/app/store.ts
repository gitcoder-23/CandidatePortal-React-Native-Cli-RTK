import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import authSlice from './slices/authSlice';
import articleSlice from './slices/articleSlice';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  // whitelist: ['auth'],
};

const combinedReducer = combineReducers({
  articles: articleSlice,
  auth: persistReducer(authPersistConfig, authSlice),
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action as never);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware({serializableCheck: false}).concat(
        createDebugger(),
      );
    }
    return getDefaultMiddleware();
  },
});

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
