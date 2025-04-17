import { useState } from "react";

import "./App.css";
import AppLayout from "../components/AppLayout";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";
import Teams from "../pages/Teams";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "project", element: <Project /> },
        { path: "teams", element: <Teams /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <AppLayout />
    </RouterProvider>
  );
}

export default App;
