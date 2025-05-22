import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../typed-hooks";
import type { User } from "../../interfaces/user";
import { cadastrarAluno } from "../../services/academy-api/usuarios/cadastrar";
import { setLoading } from "./loadingSlice";
import { setNotification } from "./notificationSlice";

type UserRegister = Omit<User, 'id' | 'criadoEm' | 'atualizado_em'>

// ASSINCRONO - Cadastrar um usuário
export const register = createAsyncThunk('users/register', async (novoUsuario: UserRegister, thunkAPI) => {
    
    // cadastrarAluno = pending
    thunkAPI.dispatch(setLoading(true));

    // chama cadastrarAluno na API
    const resultado = await cadastrarAluno(novoUsuario);

    // cadastrarAluno = fulfiled
    thunkAPI.dispatch(setLoading(false));
    thunkAPI.dispatch(setNotification({
        isVisible: true,
        message: resultado.mensagem,
        severity: resultado.sucesso ? "success" : "error"
    }));

    return resultado
});


const initialState: User[] = [];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // É utilizado apenas quando temos ações síncronas
        // register: (currentState, action: PayloadAction<UserRegister>) => {
        //     const newUser: User = {
        //         id: randomUUID(),
        //         criadoEm: new Date().toDateString(),
        //         atualizadoEm: new Date().toDateString(),
        //         ...action.payload
        //     }

        //     currentState.push(newUser)
        // }
    },
    extraReducers: (builder) => {
        // É utilizado apenas quando temos ações assíncronas
        builder.addCase(register.fulfilled, (currentState, action) => {

            if (action.payload.dados && action.payload.sucesso) {
                currentState.push(action.payload.dados)
            }
            
            //...
        })

    }
});



export const usersReducer = usersSlice.reducer;

export const selectUsers = (store: RootState) => store.users