import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./modules/usersSlice";
import { userLoggedReducer } from "./modules/userLoggedSlice";


export const rootReducer = combineReducers({
    users: usersReducer,
    userLogged: userLoggedReducer
});