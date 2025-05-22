import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { deletarProjeto, selectProjects } from "../store/modules/projectsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectUserLogged } from "../store/modules/userLoggedSlice";

export function ListProjects() {
  const { isLoading, projects } = useAppSelector(selectProjects);
  const userLogged = useAppSelector(selectUserLogged);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <Container sx={{ paddingY: 8 }} maxWidth="md">
        <Typography textAlign="center">Buscando projetos...</Typography>
      </Container>
    );
  }

  if (!projects.length) {
    return (
      <Container sx={{ paddingY: 8 }} maxWidth="md">
        <Typography textAlign="center">
          Não existem projetos cadastrados ainda 😢
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ paddingY: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {projects.map((projeto) => (
          <Grid key={projeto.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{ paddingTop: "56.5%" }} // 16:9
                image="https://picsum.photos/1920/1080"
                title="Image title"
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {projeto.titulo}
                </Typography>
                <Typography>{projeto.descricao ?? "Sem descrição"}</Typography>
                <Stack direction="row" spacing={1}>
                  {projeto.ferramenta.split(",").map((ferramenta) => (
                    <Chip
                      key={ferramenta}
                      label={ferramenta}
                      variant="outlined"
                    />
                  ))}
                </Stack>
                <Box>
                  <Typography>Status do projeto</Typography>
                  <Chip
                    label={
                      projeto.status === "finalizado"
                        ? "Finalizado"
                        : "Em andamento"
                    }
                    color={
                      projeto.status === "finalizado" ? "success" : "primary"
                    }
                  />
                </Box>
              </CardContent>

              <CardActions>
                <IconButton size="small" aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton
                  size="small"
                  aria-label="remove"
                  onClick={() =>
                    dispatch(
                      deletarProjeto({
                        token: userLogged.token,
                        projetoId: projeto.id,
                      })
                    )
                  }
                >
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
