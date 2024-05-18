import Nav from "./components/navBar/Nav";
import Body from "./components/Body";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Donation from "./pages/Donation";
import { useEffect, useState } from "react";
import { setToken } from "./services/requests";
import Demand from "./pages/Demand";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedInUser");
    if (loggedUser) {
      const userIn = JSON.parse(loggedUser);
      setUser(userIn);
      setToken(userIn.token);
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />}>
        <Route index element={<Body />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}
