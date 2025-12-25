import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import AllTreatments from "../Pages/AllTreatments";
import MyAppointment from "../Pages/MyAppointment";
import Profile from "../Pages/Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltreatments",
        element: <AllTreatments />,
      },
      {
        path: "/myappointment",
        element: <MyAppointment />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
export default Router;
