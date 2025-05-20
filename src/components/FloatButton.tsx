import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";

export function FloatButton() {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom: "30px", right: "30px" }}
    >
      <Add />
    </Fab>
  );
}
