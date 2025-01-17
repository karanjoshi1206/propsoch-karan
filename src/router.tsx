import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./components/layout/appLayout";
import Wishlist from "./pages/wishlist";
import PropertyDetails from "./pages/propertyDetails";
import PageNotFound from "./pages/notFound/notFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/property/:id",
        element: <PropertyDetails />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
