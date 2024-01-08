import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Crew from "./pages/Crew.tsx";
import Technology from "./pages/Technology.tsx";
import Destinations from "./pages/Destinations.tsx";

const router = createBrowserRouter([
  { path: "*", element: <Home /> },
  { path: "/crew", element: <Crew /> },
  { path: "/technology", element: <Technology /> },
  { path: "/destinations", element: <Destinations /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
