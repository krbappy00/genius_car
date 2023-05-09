import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "./Layout/Main";
import AddProduct from "../Pages/AddProduct";
import Product from "../Pages/Product/Product";
import Team from "../Pages/TeamMember/Team";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Service from "../Pages/Service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/addmember",
        element: <Team></Team>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/product",
        element: <Product></Product>,
        loader: () => fetch("https://genius-cars-service.onrender.com/products"),
      },
      
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://genius-cars-service.onrender.com/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`https://genius-cars-service.onrender.com/services/${params.id}`),
      },
      {
        path: "/checkout/product/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`https://genius-cars-service.onrender.com/checkout/products/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
  
export default router;