import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ErrorPage } from "./error-page"
import { Signup } from "./components/Signup"
import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "./keycloak"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
])
root.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <RouterProvider router={router} />
    </ReactKeycloakProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
