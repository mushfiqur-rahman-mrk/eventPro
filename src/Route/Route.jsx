 
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import ServicesDetail from "../Pages/Services/ServicesDetail";
import Login from "../Components/Login.jsx/Login";
import Signup from "../Components/Signup.jsx/Signup";
import PrivateRoute from "./PrivateRoute";


  const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=>fetch('/data.json')
        },
        {
            path:"/services",
            element: <Services></Services>,
            loader: ()=>fetch('/data.json')
        },
        {
            path:"/contact",
            element: <Contact></Contact>
        },
        {
            path:"/services/:id",
            element: <PrivateRoute><ServicesDetail></ServicesDetail></PrivateRoute>,
            loader: ()=>fetch('/data.json')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        }
      ]
    },
  ]);
 

export default Route;