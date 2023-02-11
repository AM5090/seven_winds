import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { paths } from "../shared/consts";
import { MainLaout } from "./MainLaout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLaout/>} >
            <Route path={paths.viewing.path} element={paths.viewing.element} />
            <Route path={paths.management.path} element={paths.management.element} />
        </Route>
    )
)
