import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectModal,
  setFormValues,
  setIsOpen,
} from "../store/modules/modalSlice";
import { cadastrarProjeto } from "../store/modules/projectsSlice";
import { selectUserLogged } from "../store/modules/userLoggedSlice";

const optionsStacks = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Express.js",
  "Node.js",
  "ReactJS",
  "PostgreSQL",
  "Prisma",
];

export function Modal() {
  const { isOpen, title, form } = useAppSelector(selectModal);
  const userLogged = useAppSelector(selectUserLogged);
  const dispatch = useAppDispatch();

  function handleTextFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    dispatch(
      setFormValues({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSave() {
    if (form.id) {
      //... atualização
    }

    // cadastro
    dispatch(
      cadastrarProjeto({
        titulo: form.title,
        descricao: form.description,
        ferramenta: form.tools.join(","),
        status: form.status || "em_andamento",
        token: userLogged.token,
      })
    );
  }

  return (
    <Dialog
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogContent>
        <Stack component="form" spacing={2} marginTop={3}>
          <TextField
            type="text"
            name="title"
            label="Título"
            value={form.title}
            onChange={handleTextFieldChange}
          />
          <TextField
            type="text"
            name="description"
            label="Descrição"
            value={form.description}
            onChange={handleTextFieldChange}
          />
          <Autocomplete
            multiple
            options={optionsStacks}
            filterSelectedOptions
            value={form.tools}
            onChange={(_, newValue) =>
              dispatch(setFormValues({ ...form, tools: newValue }))
            }
            renderInput={(params) => (
              <TextField {...params} label="Ferramentas/Tecnologias" />
            )}
          />
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>

            <Select
              labelId="status-label"
              id="status"
              label="Status"
              value={form.status}
              onChange={(event) =>
                dispatch(setFormValues({ ...form, status: event.target.value }))
              }
            >
              <MenuItem value="" selected disabled>
                - Selecione -
              </MenuItem>
              <MenuItem value="finalizado">Finalizado</MenuItem>
              <MenuItem value="em_andamento">Em andamento</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => dispatch(setIsOpen({ isOpen: false, title: "" }))}
        >
          Cancelar
        </Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
