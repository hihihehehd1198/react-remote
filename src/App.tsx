import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Entity } from "./pages/entity";
import { Page1 } from "./pages/page1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/react-remote"} replace />,
    // errorElement: <ErrorComponent />,f
  },
  {
    path: "/react-remote",
    element: <Entity />,
    children: [
      {
        path: "page1",
        element: <Page1 />,
        // errorElement: <ErrorComponent />,
      },
    ],
  },
]);
class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    );
  }
}

class AppElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define("react-element", AppElement);
