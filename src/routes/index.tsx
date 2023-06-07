import { createBrowserRouter } from "react-router-dom";
import Login from "../views/screens/Auth/Login";
import Register from "../views/screens/Auth/Register";


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
]);

export default router