import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../typed-hooks";


interface Loading {
    isLoading: boolean;
}

const initialState: Loading = {
    isLoading: false
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (currentState, action: PayloadAction<boolean>) => {
            currentState.isLoading = action.payload
        }
    }
});

export const { setLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
export const selectLoading = (store: RootState) => store.loading

