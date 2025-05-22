import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../typed-hooks";


interface Notification {
    message: string;
    isVisible: boolean;
    severity: "error" | "info" | "success" | "warning";
}

const initialState: Notification = {
    message: "",
    isVisible: false,
    severity: "info"
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: (_, action: PayloadAction<Notification>) => {
            return action.payload
        }
    }
});

export const { setNotification } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
export const selectNotification = (store: RootState) => store.notification