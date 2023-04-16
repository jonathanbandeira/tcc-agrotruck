import React from "react";
import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App path="/" />,
    },
    {
        path: "/register",
        element: <App path="/register" />,
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
    {
        path: "/pedidoAtual",
        element: <App path="/pedidoAtual" />,
    },
    {
        path: "/cadastrarPedido",
        element: <App path="/cadastrarPedido" />,
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