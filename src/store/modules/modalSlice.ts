import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../typed-hooks";

interface FormValues {
    id: string;
    title: string;
    description: string;
    tools: string[];
    status: "" | "finalizado" | "em_andamento"
}

interface Modal {
    isOpen: boolean;
    title: string;
    form: FormValues
}

const formInitialValues: FormValues  = {
    id: "",
    title: "",
    description: "",
    status: "",
    tools: []
}

const initialState: Modal = {
    isOpen: false,
    title: "",
    form: formInitialValues
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<Omit<Modal, 'form'>>) => {
            state.isOpen = action.payload.isOpen
            state.title = action.payload.title
        },
        setFormValues: (state, action: PayloadAction<FormValues>) => {
            state.form = action.payload
        },

        resetFormValues: (state) => {
            state.form = formInitialValues
        }
    }
});

export const { setIsOpen, setFormValues, resetFormValues } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export const selectModal = (store: RootState) => store.modal;
