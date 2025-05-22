import { Box } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { DefaultAuthLayout } from "../components/DefaultAuthLayout";
import { AvatarIcon } from "../components/AvatarIcon";
import { Title } from "../components/Title";
import { FormSignIn } from "../components/FormSignIn";
import { NavigationAuthForm } from "../components/NavigationAuthForm";
import { Copyright } from "../components/Copyright";
import { useAppSelector } from "../store/hooks";
import { selectUserLogged } from "../store/modules/userLoggedSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Loading } from "../components/Loading";
import { Notification } from "../components/Notification";

export function SignIn() {
  const userLogged = useAppSelector(selectUserLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogged.token) {
      navigate("/projects");
    }
  }, [userLogged.token, navigate]);

  return (
    <DefaultAuthLayout>
      <Box
        marginY={8}
        marginX={4}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <AvatarIcon icon={<LockOutlined />} />

        <Title text="Sign in" />

        <FormSignIn />

        <NavigationAuthForm mode="signin" />

        <Copyright />
      </Box>
      <Loading />
      <Notification />
    </DefaultAuthLayout>
  );
}
