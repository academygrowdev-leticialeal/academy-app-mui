import { Button, Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectUsers } from "../store/modules/usersSlice";
import { login } from "../store/modules/userLoggedSlice";
import { useNavigate } from "react-router";

export function FormSignIn() {
    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        // const remember = event.currentTarget.remember.checked;

        const dataUser = {
            email,
            password
        }

        const userFound = users.find((user) => user.email === dataUser.email && user.senha === dataUser.password)

        if (!userFound) {
            alert("Invalid credentials!")
            return
        }

        dispatch(login(userFound))
        alert("User logged!")
        event.currentTarget.reset();
        navigate("/projects")
    }


    return (
        <Stack component="form"  spacing={3} width={"100%"} marginY={2} onSubmit={handleSubmit}>
            <TextField type="email" name="email" label="E-mail Address" variant="outlined" fullWidth required/>
            <TextField type="password" name="password" label="Password" variant="outlined" fullWidth required/>
            <FormControlLabel name="remember" control={<Checkbox />} label="Remember me" />

            <Button type="submit" variant="contained">Sign In</Button>
        </Stack>
    )
}