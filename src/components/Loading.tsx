import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { selectLoading } from "../store/modules/loadingSlice";

export function Loading() {
  const { isLoading } = useAppSelector(selectLoading);

  return (
    <Dialog open={isLoading} fullWidth>
      <DialogContent>
        <Box component={Stack} alignItems="center" spacing={4}>
          <Typography>Aguarde, carregando...</Typography>
          <CircularProgress />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
