import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css" // apply bootstrap for styling
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Provider } from "react-redux"

import NavbarComponent from "./components/NavbarComponent"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Protected from "./components/Protected"
import Unprotected from "./components/Unprotected"
import store from "./redux/store"
import CarDetail from "./pages/cars/details"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <NavbarComponent />
        <Container className="mt-5">
          <Home />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <Unprotected>
        <NavbarComponent />
        <Container className="mt-5">
          <Login />
        </Container>
      </Unprotected>
    ),
  },
  {
    path: "/register",
    element: (
      <Unprotected>
        <NavbarComponent />
        <Container className="mt-5">
          <Register />
        </Container>
      </Unprotected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected roles={["admin"]}>
        <NavbarComponent />
        <Container className="mt-5">
          <Profile />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/cars/:id",
    element: (
      <Protected>
        <NavbarComponent />
        <Container className="mt-5">
          <CarDetail />
        </Container>
      </Protected>
    ),
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />

      <ToastContainer theme="colored" />
    </Provider>
  )
}

export default App
