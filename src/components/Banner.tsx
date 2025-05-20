import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

export function Banner() {
  return (
    <Box component={Paper} paddingTop={8} paddingBottom={6}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Meus Projetos
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          paragraph
        >
          Esta seção reúne projetos desenvolvidos ao longo das disciplinas e
          atividades práticas voltadas ao desenvolvimento web. Cada trabalho
          reflete a aplicação dos conhecimentos adquiridos em front-end e
          back-end. Os projetos exploram as diferentes tecnologias aprendidas
          durante o programa de formação Starter da Growdev. Aqui, você poderá
          visualizar soluções criadas para resolver desafios reais, com foco em
          usabilidade, performance e boas práticas de codificação.
        </Typography>
        <Box marginTop={4}>
          <Grid container spacing={2} justifyContent="center">
            <Grid size={"auto"}>
              <IconButton>
                <GitHub />
              </IconButton>
            </Grid>
            <Grid size={"auto"}>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </Grid>
            <Grid size={"auto"}>
              <IconButton>
                <Facebook />
              </IconButton>
            </Grid>
            <Grid size={"auto"}>
              <IconButton>
                <Instagram />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
