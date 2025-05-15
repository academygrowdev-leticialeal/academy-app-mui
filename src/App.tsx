import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { darkTheme } from "./configs/themes/dark";

export function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <AppRoutes />
      </ThemeProvider>
    </>
  )
}

