import { userReducer } from "./feature/userSlice";
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  user: userReducer,
})



export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}