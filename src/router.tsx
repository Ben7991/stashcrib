/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import { Root } from "@/components/templates/root/Root";

const LandingPage = lazy(
  () => import("./pages/client-facing/landing-page/LandingPage"),
);

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <LandingPage /> }],
  },
]);
