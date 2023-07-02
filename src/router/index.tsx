import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../container/Home";
import Header from "../components/Header";
import Register from "../container/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/edit",
    element: <Register />,
  },
]);

const Router = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} fallbackElement={<p>Loading ...</p>} />
    </>
  );
};

export default Router;
