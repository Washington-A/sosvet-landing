import app_routes from "./app_routes.ts";
import { Route, Routes} from "react-router-dom";

import Home from "../pages/home/Home.tsx";
import MainLayout from "../components/appLayout/MainLayout.tsx";

export default function Router() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={app_routes.home} element={<Home/>}/>
            </Route>
        </Routes>

    );
}