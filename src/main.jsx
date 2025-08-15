import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import TripForm from "./Components/TripForm.jsx";
import Layout from "./Layout.jsx";
import { createRoot } from "react-dom/client";
import ViewTrip from "./view_trip/ViewTrip.jsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
