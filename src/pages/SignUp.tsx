import { Box } from "@mui/material";
import { LockOpenOutlined } from "@mui/icons-material";
import { DefaultAuthLayout } from "../components/DefaultAuthLayout";
import { AvatarIcon } from "../components/AvatarIcon";
import { Title } from "../components/Title";
import { NavigationAuthForm } from "../components/NavigationAuthForm";
import { Copyright } from "../components/Copyright";
import { FormSignUp } from "../components/FormSignUp";
import { Loading } from "../components/Loading";
import { Notification } from "../components/Notification";

export function SignUp() {
  return (
    <DefaultAuthLayout>
      <Box
        marginY={8}
        marginX={4}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <AvatarIcon icon={<LockOpenOutlined />} />

        <Title text="Sign up" />

        <FormSignUp />

        <NavigationAuthForm mode="signup" />

        <Copyright />
      </Box>
      <Loading />
      <Notification />
    </DefaultAuthLayout>
  );
}
