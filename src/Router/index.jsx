import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";
import ErrorPage from "../pages/ErrorPage";
const HomePage = lazy(() => import("../pages/Home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default router;
