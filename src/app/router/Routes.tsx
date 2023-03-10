import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../../features/account/Login";
import Catalog from "../../features/homepage/Catalog";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'Pets', element: <Catalog /> },
            { path: 'login', element: <Login /> }
        ]
    }
]
export const router = createBrowserRouter(routes);