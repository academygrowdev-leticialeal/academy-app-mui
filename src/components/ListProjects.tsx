import { Delete, Edit } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function ListProjects() {
  return (
    <Container sx={{ paddingY: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid key={card} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ paddingTop: "56.5%" }} // 16:9
                image="https://picsum.photos/1920/1080"
                title="Image title"
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>

              <CardActions>
                <IconButton size="small" aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton size="small" aria-label="remove">
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
