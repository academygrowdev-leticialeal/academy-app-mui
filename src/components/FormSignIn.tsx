import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/modules/userLoggedSlice";

export function FormSignIn() {
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    // const remember = event.currentTarget.remember.checked;

    dispatch(
      login({
        email,
        senha: password,
      })
    );
    event.currentTarget.reset();
  }

  return (
    <Stack
      component="form"
      spacing={3}
      width={"100%"}
      marginY={2}
      onSubmit={handleSubmit}
    >
      <TextField
        type="email"
        name="email"
        label="E-mail Address"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        fullWidth
        required
      />
      <FormControlLabel
        name="remember"
        control={<Checkbox />}
        label="Remember me"
      />

      <Button type="submit" variant="contained">
        Sign In
      </Button>
    </Stack>
  );
}
