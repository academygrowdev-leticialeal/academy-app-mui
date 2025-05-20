import { Logout, School } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout, selectUserLogged } from "../store/modules/userLoggedSlice";

export function MyAppBar() {
  const userLogged = useAppSelector(selectUserLogged);
  const dispatch = useAppDispatch();

  function handleLogout() {
    console.log(typeof userLogged.token);
    dispatch(logout(userLogged.token));
  }

  return (
    <AppBar position="relative">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <School sx={{ mr: 2 }} />

          <Typography variant="h6" color="inherit" noWrap>
            GrowAcademy
          </Typography>
        </Box>

        <IconButton onClick={handleLogout}>
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
