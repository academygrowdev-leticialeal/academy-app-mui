import { useNavigate } from "react-router";
import { MyAppBar } from "../components/AppBar";
import { Banner } from "../components/Banner";
import { FloatButton } from "../components/FloatButton";
import { Footer } from "../components/Footer";
import { ListProjects } from "../components/ListProjects";
import { Modal } from "../components/Modal";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectUserLogged } from "../store/modules/userLoggedSlice";
import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { Notification } from "../components/Notification";
import { listarProjetos } from "../store/modules/projectsSlice";

export function Projects() {
  const userLogged = useAppSelector(selectUserLogged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userLogged.token) {
      navigate("/");
      return;
    }

    dispatch(listarProjetos(userLogged.token));
  }, [userLogged.token, navigate, dispatch]);

  if (!userLogged.token) return null;

  return (
    <>
      <MyAppBar />
      <Banner />
      <ListProjects />
      <Footer />
      <FloatButton />
      <Modal />
      <Loading />
      <Notification />
    </>
  );
}
