import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import DetailsPage from "../pages/MarathonDetailsPage/DetailsPage";
import PrivateRoute from "./PrivateRoute";
import MarathonRegister from "../pages/MarathonRegister/MarathonRegister";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/marathons/:id',
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/marathons/${params.id}`)
      },
      {
        path:'/registerMarathon/:id',
        element:<PrivateRoute><MarathonRegister></MarathonRegister></PrivateRoute>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      }
    ],
  },
]);

export default router;
