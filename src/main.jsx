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
    path: "/doctor/:id",
    element: <DoctorDetails />,
  },
  {
    path: "/my-appointments",
    element: <MyAppointments />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
