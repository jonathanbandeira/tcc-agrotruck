import React from "react";
import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App path="/" />,
    },
    {
<<<<<<< HEAD
        path: "/register",
        element: <App path="/register" />,
=======
        path: "/dashboard",
        element: <App path={"/dashboard"} />,
>>>>>>> 6c3490c4db27bfe714bec0a1721b81158a1ae5f1
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