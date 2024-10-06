import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import About from "../Pages/About/About";
import ProtectedRoute from "../Component/ProtectedRoute/ProtectedRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/about",
        element: <ProtectedRoute>
          <About />
        </ProtectedRoute>
      }
    ]
  }
])