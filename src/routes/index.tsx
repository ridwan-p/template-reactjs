import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("../views/screens/Auth/Login"));
const Register = lazy(() => import("../views/screens/Auth/Register"));
const Dashboard = lazy(() => import("../views/screens/Dashboard/Dashboard"));
const Home = lazy(() => import("../views/screens/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router