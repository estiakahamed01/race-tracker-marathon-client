import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import DetailsPage from "../pages/MarathonDetailsPage/DetailsPage";
import PrivateRoute from "./PrivateRoute";
import MarathonRegister from "../pages/MarathonRegister/MarathonRegister";
import MyApplications from "../pages/MyApplications/MyApplications";
import DashboardLayout from "../layout/DashboardLayout";
import MyRegister from "../pages/MyRegister/MyRegister";
import MyMarathon from "../pages/MyMarathon/MyMarathon";
import AddMarathon from "../pages/AddMarathon/AddMarathon";
import UpdateMarathon from "../pages/UpdateMarathon/UpdateMarathon";
import Marathons from "../pages/Marathons/Marathons";
import Avatar from "../pages/Avatar/Avatar";


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
        path: '/myApplications',
        element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path:"marathons",
        element: <PrivateRoute><Marathons></Marathons></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/marathons")

      },
      {
        path:'marathons/updateMarathon/:_id',
        element:<PrivateRoute><UpdateMarathon></UpdateMarathon></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/marathons/${params._id}`)
      },
      {
        path:'avatar',
        element:<PrivateRoute><Avatar></Avatar></PrivateRoute>
      }
    ],
  },
  //DashBoard
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'addMarathon',
        element:<PrivateRoute><AddMarathon></AddMarathon></PrivateRoute>
      },
      {
        path:'myMarathon',
        element:<PrivateRoute><MyMarathon></MyMarathon></PrivateRoute>
      },
      {
        path:'myRegister',
        element:<PrivateRoute><MyRegister></MyRegister></PrivateRoute>
      },
      {
        path:'myMarathon/updateMarathon/:_id',
        element:<PrivateRoute><UpdateMarathon></UpdateMarathon></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/marathons/${params._id}`)
      }
      // {
      //   path:'updateMarathon',
      //   element:<PrivateRoute><UpdateMarathon></UpdateMarathon></PrivateRoute>
      // }
    ]

  }
]);

export default router;
