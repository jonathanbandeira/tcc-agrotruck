import React from "react";
import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App path="/" />,
    },
    {
        path: "/principal",
        element: <App path={"/principal"} />,
    },
    {
        path: "/register",
        element: <App path="/register" />,
    },
    {
        path: "/perfil",
        element: <App path="/perfil" />,
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
    {
        path: "/employee",
        element: <App path="/employee" />,
    },
    {
        path: "/employee/EmpCreate",
        element: <App path="/employee/EmpCreate" />,
    },
    {
        path: "/employee/EmpDetail",
        element: <App path="/employee/EmpDetail" />,
    },
    {
        path: "/employee/EmpDetail",
        element: <App path="/employee/EmpDetail" />,
    },
    {
        path: "/employee/EmpListing",
        element: <App path="/employee/EmpListing" />,
    }
]);

const Router = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default Router