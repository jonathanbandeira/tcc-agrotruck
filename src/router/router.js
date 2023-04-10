import React from "react";
import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App path="/" />,
    },
    {
        path: "/perfil",
        element: <App path={"/perfil"} />,
    },
    {
        path: "/motorista",
        element: <App path="/motorista" />,
    },
    {
        path: "/pedido",
        element: <App path="/pedido" />,
    },
]);

const Router = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default Router