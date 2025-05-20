import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer'
import { persistStore, persistReducer, FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST } from 'redux-persist'
import localstorage from 'redux-persist/lib/storage'

const persistedReducers = persistReducer(
    {
        key: "app",
        storage: localstorage
    },
    rootReducer
)


export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST]
    }
  })
});

export const persistedStore = persistStore(store)

