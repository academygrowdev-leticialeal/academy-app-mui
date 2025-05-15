import {  Box } from "@mui/material";
import { LockOutlined } from '@mui/icons-material';
import { DefaultAuthLayout } from "../components/DefaultAuthLayout";
import { AvatarIcon } from "../components/AvatarIcon";
import { Title } from "../components/Title";
import { FormSignIn } from "../components/FormSignIn";
import { NavigationAuthForm } from "../components/NavigationAuthForm";
import { Copyright } from "../components/Copyright";


export function SignIn() {
    return (
      <DefaultAuthLayout>
        <Box marginY={8} marginX={4} display="flex" alignItems="center" flexDirection="column">
          <AvatarIcon icon={<LockOutlined />} />

          <Title text="Sign in" />

          <FormSignIn />

          <NavigationAuthForm mode="signin"/>

          <Copyright />
        </Box>
      </DefaultAuthLayout>
    )
}