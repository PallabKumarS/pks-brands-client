import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../home/Home";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../pages/BrandDetails";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/products/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/products/:brand/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/brand/${params.id}`),
      },
      {
        path: "/products/:brand/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/brand/${params.id}`),
      },
    ],
  },
]);

export default router;
