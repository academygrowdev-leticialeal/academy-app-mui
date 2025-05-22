import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { setIsOpen } from "../store/modules/modalSlice";

export function FloatButton() {
  const dispatch = useAppDispatch();

  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom: "30px", right: "30px" }}
      onClick={() =>
        dispatch(setIsOpen({ isOpen: true, title: "Cadastrar projeto" }))
      }
    >
      <Add />
    </Fab>
  );
}
