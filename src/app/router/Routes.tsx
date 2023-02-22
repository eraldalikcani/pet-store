import { Dispatch, SetStateAction } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../../features/account/Login";
import Catalog from "../../features/Catalog";
import App from "../layout/App";

// interface Props{
//     handleClickOpen: () => void;
//     handleClose: () => void;
//     handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
//     open: boolean;
//     setUsername: Dispatch<SetStateAction<string>>;
//     setPassword: Dispatch<SetStateAction<string>>;
// }

// export const routes: RouteObject[] = [
//     {
//         path: '/',
//         element: <App />,
//         children: [
//             { path: 'Pets', element: <Catalog /> },
//             { path: 'login', element: <Login /> }
//         ]
//     }
// ]
// export const router = createBrowserRouter(routes);