import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import DoctorDetails from "./pages/DoctorDetails.jsx";
import MyAppointments from "./pages/MyAppointments.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/doctor/:id", // Dynamic route for individual doctor
    element: <DoctorDetails />, // Render the DoctorDetail component for this route
  },
  {
    path: "/my-appointments", // Route for My Appointments page
    element: <MyAppointments />, // Render the MyAppointments component for this route
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
