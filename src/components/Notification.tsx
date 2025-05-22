import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectNotification,
  setNotification,
} from "../store/modules/notificationSlice";

export function Notification() {
  const notification = useAppSelector(selectNotification);
  const dispatch = useAppDispatch();

  function handleClose() {
    dispatch(
      setNotification({ isVisible: false, message: "", severity: "info" })
    );
  }

  return (
    <Snackbar
      open={notification.isVisible}
      autoHideDuration={5 * 1000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={notification.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
}
