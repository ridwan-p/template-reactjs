import { createBrowserRouter } from "react-router-dom";
import Login from "../views/screens/Auth/Login";
import Register from "../views/screens/Auth/Register";
import Dashboard from "../views/screens/Dashboard/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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