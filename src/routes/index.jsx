import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "../views/Home";
import Detalle from "../views/Detalle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "caracter/:caracterId",
    element: <Detalle />,
  },
]);

const Rutas = () => <RouterProvider router={router} />;

export default Rutas;
