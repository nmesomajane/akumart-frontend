import { useRoutes } from "react-router";
import type { RouteObject } from "react-router-dom";
import { Home, ForgetPassword, Privacy, Register, SignIn } from "../pages";

import { SharedLayout } from "../components/layout/SharedLayout";

import { ScrollToTop } from "../components/layout/ScrollToTop";

export function Routes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <>
          <SharedLayout />
          <ScrollToTop />
        </>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/register", element: <Register /> },

        { path: "/forgotpassword", element: <ForgetPassword /> },

        { path: "/privacy", element: <Privacy /> },
      ],
    },
  ];

  return useRoutes(routes);
}
