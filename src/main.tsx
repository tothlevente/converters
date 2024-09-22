import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Temperatures from "./components/Temperatures/Temperatures";
import ErrorPage from "./components/ErrorPage";
import Root from "./Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root element={<div></div>} />,
    errorElement: <Root element={<ErrorPage />} />,
  },
  {
    path: "/temperatures",
    element: <Root element={<Temperatures />} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
