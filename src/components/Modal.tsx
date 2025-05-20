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
  return (
    <Dialog
      open={false}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">
        Cadastre um novo projeto
      </DialogTitle>

      <DialogContent>
        <Stack component="form" spacing={2} marginTop={3}>
          <TextField type="text" name="title" label="Título" />
          <TextField type="text" name="title" label="Descrição" />
          <Autocomplete
            multiple
            options={optionsStacks}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} label="Ferramentas/Tecnologias" />
            )}
          />
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>

            <Select labelId="status-label" id="status" label="Status">
              <MenuItem value="finalizado">Finalizado</MenuItem>
              <MenuItem value="em_andamento">Em andamento</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button>Cancelar</Button>
        <Button>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
