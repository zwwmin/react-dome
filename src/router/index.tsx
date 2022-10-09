import React from "react";
import { useRoutes } from "react-router-dom";

// const Home = React.lazy(() => import("@/views/home"));
// const Login = React.lazy(() => import("@/views/login"));
import Home from '@views/home';
import Login from '@views/login';

export default function App() {
    return useRoutes([
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
    ])
  }
  