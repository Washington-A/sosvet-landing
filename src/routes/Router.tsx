import app_routes from "./app_routes.ts";
import { Route, Routes} from "react-router-dom";

import Home from "../pages/home/Home.tsx";
import MainLayout from "../components/appLayout/MainLayout.tsx";
import ProfessionalsPage from "../pages/professionals/ProfessionalsPage.tsx";
import ContactPage from "../pages/contact/ContactPage.tsx";

export default function Router() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={app_routes.home} element={<Home/>}/>
                <Route path={app_routes.professionalsPage} element={<ProfessionalsPage/>}/>
                <Route path={app_routes.contact} element={<ContactPage/>}/>
            </Route>
        </Routes>

    );
}