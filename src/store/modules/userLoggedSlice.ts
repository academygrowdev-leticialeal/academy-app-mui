import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../typed-hooks";
import { loginAluno } from "../../services/academy-api/usuarios/login";
import { logoutAluno } from "../../services/academy-api/usuarios/logout";
import type { UserLogged } from "../../interfaces/user-logged";
import { setLoading } from "./loadingSlice";
import { setNotification } from "./notificationSlice";


export const login = createAsyncThunk("userLogged/login", async (dados: Omit<UserLogged, 'token'>, thunkAPI) => {

    thunkAPI.dispatch(setLoading(true));
    const resultado = await loginAluno(dados);

    const payload = {
        ...resultado,
        dados: {
            ...resultado.dados,
            ...dados
        }
    }

    thunkAPI.dispatch(setLoading(false));
    thunkAPI.dispatch(setNotification({
        isVisible: true,
        message: resultado.mensagem,
        severity: resultado.sucesso ? "success" : "error"
    }))

    return payload
});


export const logout = createAsyncThunk("userLogged/logout", async(token: string, { dispatch }) => {

    dispatch(setLoading(true));
    const resultado = await logoutAluno(token);
    dispatch(setLoading(false));
    dispatch(setNotification({
        isVisible: true,
        message: resultado.mensagem,
        severity: resultado.sucesso ? "success" : "error"
    }));

    return resultado
})

const initialState: UserLogged = {
    email: "",
    senha: "",
    token: ""
}

const userLoggedSlice = createSlice({
    name: "userLogged",
    initialState,
    reducers: {
        // login: (_, action: PayloadAction<User>) => {
        //    return action.payload;
        // },
        // logout: () => {
        //     return initialState;
        // }
    },
    extraReducers: (builder) => {

        builder.addCase(login.fulfilled, (currentState, action) => {

            if(action.payload.sucesso && action.payload.dados.token) {
                currentState.email = action.payload.dados.email;
                currentState.senha = action.payload.dados.senha;
                currentState.token = action.payload.dados.token;
            }
        })

        builder.addCase(logout.fulfilled, (_, action) => {
            if(action.payload.sucesso) {
                return initialState;
            }

        })
    }
})

export const userLoggedReducer = userLoggedSlice.reducer
export const selectUserLogged = (store: RootState) => store.userLogged