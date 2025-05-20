import { Button, Stack, TextField } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { register } from "../store/modules/usersSlice";

export function FormSignUp() {
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const studentName = event.currentTarget["student-name"].value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    const dataUser = {
      nome: studentName,
      email,
      senha: password,
    };

    dispatch(register(dataUser));
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
        type="text"
        name="student-name"
        label="Name"
        variant="outlined"
        fullWidth
        required
      />
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

      <Button type="submit" variant="contained">
        Sign Up
      </Button>
    </Stack>
  );
}
