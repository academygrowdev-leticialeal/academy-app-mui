import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as randomUUID } from 'uuid';
import type { RootState } from "../typed-hooks";

export interface User {
    id: string;            
    nome: string;         
    email: string;      
    idade?: number;       
    senha: string;      
    authToken?: string;     
    criadoEm: string;     
    atualizadoEm: string;
}

type UserRegister = Omit<User, 'id' | 'criadoEm' | 'atualizadoEm'>

const initialState: User[] = [];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        register: (currentState, action: PayloadAction<UserRegister>) => {
            const newUser: User = {
                id: randomUUID(),
                criadoEm: new Date().toDateString(),
                atualizadoEm: new Date().toDateString(),
                ...action.payload
            }

            currentState.push(newUser)
        }
    }
});

export const { register } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

export const selectUsers = (store: RootState) => store.users