import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./modules/usersSlice";
import { userLoggedReducer } from "./modules/userLoggedSlice";
import { loadingReducer } from "./modules/loadingSlice";
import { notificationReducer } from "./modules/notificationSlice";
import { projectsReducer } from "./modules/projectsSlice";
import { modalReducer } from "./modules/modalSlice";


export const rootReducer = combineReducers({
    users: usersReducer,
    userLogged: userLoggedReducer,
    loading: loadingReducer,
    notification: notificationReducer,
    projects: projectsReducer,
    modal: modalReducer
});