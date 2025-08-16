import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ FIXED
import TripForm from "./Components/TripForm.jsx";
import Layout from "./Layout.jsx";
import { createRoot } from "react-dom/client";
import ViewTrip from "./view_trip/ViewTrip.jsx";
import Mytrips from "./Components/Mytrips.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "create-trip",
        element: <TripForm />,
      },
      {
        path: "viewtrip/:id",
        element: <ViewTrip />,
      },
      {
        path: "mytrips",
        element: <Mytrips />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
