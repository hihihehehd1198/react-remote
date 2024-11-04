import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Entity } from "./pages/entity";
import { Page1 as ChildrenPage1 } from "./pages/entity/children/page1";
import { Page2 } from "./pages/entity/children/page2";
import { Page3 } from "./pages/entity/children/page3";
import { SceneComponent } from "./pages/components/scene";
import "./style.css";
class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              // element={<Navigate replace to={"/entity"} />}
              element={<Navigate replace to={"/scene"} />}
            ></Route>

            {/* <Route path="/react-remote" element={<Entity />}></Route> */}
            <Route path="/scene" element={<SceneComponent />} />
          </Routes>
        </BrowserRouter>
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
