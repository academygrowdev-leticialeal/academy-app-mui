import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./usersSlice";
import type { RootState } from "../typed-hooks";


const initialState: User = {
    id: "",
    nome: "",
    email: "",
    senha: "",
    atualizadoEm: "",
    criadoEm: "",
}

const userLoggedSlice = createSlice({
    name: "userLogged",
    initialState,
    reducers: {
        login: (_, action: PayloadAction<User>) => {
           return action.payload;
        },
        logout: () => {
            return initialState;
        }
    }
})

export const { login, logout } = userLoggedSlice.actions
export const userLoggedReducer = userLoggedSlice.reducer
export const selectUserLogged = (store: RootState) => store.userLogged