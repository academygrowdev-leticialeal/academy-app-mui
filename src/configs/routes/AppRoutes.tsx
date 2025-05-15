import { BrowserRouter, Route, Routes } from "react-router";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";
import { Projects } from "../../pages/Projects";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/projects" element={<Projects />}/>
            </Routes>
        </BrowserRouter>
    )
}