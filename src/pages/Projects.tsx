import { useNavigate } from "react-router";
import { MyAppBar } from "../components/AppBar";
import { Banner } from "../components/Banner";
import { FloatButton } from "../components/FloatButton";
import { Footer } from "../components/Footer";
import { ListProjects } from "../components/ListProjects";
import { Modal } from "../components/Modal";
import { useAppSelector } from "../store/hooks";
import { selectUserLogged } from "../store/modules/userLoggedSlice";
import { useEffect } from "react";

export function Projects() {
  const userLogged = useAppSelector(selectUserLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogged.token) {
      navigate("/");
    }
  }, [userLogged.token, navigate]);

  if (!userLogged.token) return null;

  return (
    <>
      <MyAppBar />
      <Banner />
      <ListProjects />
      <Footer />

      <FloatButton />
      <Modal />
    </>
  );
}
