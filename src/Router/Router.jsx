import React from "react";
// import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "../Pages/NotFoundPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../Pages/ProjectDetails";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />, // Main layout with Navbar
      children: [
        { path: "/", element: <Home /> }, // Home Page
        { path: "pages/:id", element: <ProjectDetails /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />, // Catch-all route for undefined paths
    },
  ],

  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
