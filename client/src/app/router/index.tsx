import React from "react";
import { ROUTES } from "app/router/data";
import { PageLoader } from "app/components/pageLoader";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Router() {
  return (
    <RouterProvider
      fallbackElement={<PageLoader />}
      router={createBrowserRouter(ROUTES)}
    />
  );
}
