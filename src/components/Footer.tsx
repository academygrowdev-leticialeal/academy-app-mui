import { Box, Paper, Typography } from "@mui/material";
import { Copyright } from "./Copyright";

export function Footer() {
  return (
    <Box component={Paper} padding={6} textAlign="center">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  );
}
