import { Grid, Typography, Link } from "@mui/material";
import { Link as LinkRouter} from 'react-router';

interface NavigationAuthFormProps {
    mode: "signin" | "signup";
}

export function NavigationAuthForm({ mode }: NavigationAuthFormProps) {
    return (
        <Grid container width="100%">
            {mode === "signin" && (
                <Grid size={{xs: 12, md: 6}}>
                    <Typography variant="body2">
                    <Link href="#" sx={{ textDecoration: "none", ":hover": { textDecoration: "underline"}}}>Forgot password?</Link>
                    </Typography>
                </Grid>
            )}
            <Grid size={{ xs: 12, md: mode === "signin" ? 6 : undefined}}>
                <Typography variant="body2" textAlign={"end"}>
                    <Link sx={{ textDecoration: "none", ":hover": { textDecoration: "underline"}}} component={LinkRouter} to={mode === "signin" ? "/signup" : "/"}>
                        {mode === "signin" ? "Don't have an account? Sign Up": "Already have an account? Sign in"}
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}