import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addNoteReducer from "./reducers/addNoteReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { themeReducer } from "./reducers/themeReducer";

const persistConfig = {
    key: 'persistData',
    storage,
}
const rootReducer = combineReducers({ 
    notes: addNoteReducer,
    theme: themeReducer
  })
  
const persistedReducer =  persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

const persistor = persistStore(store)

export default store;
export {persistor};