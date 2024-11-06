import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SceneComponent } from "./pages/components/scene";
import "./style.css";

customElements.define(
  "react-element",
  class extends HTMLElement {
    private readonly root: ReactDOM.Root;
    constructor() {
      super();
      this.root = ReactDOM.createRoot(this);
    }
    connectedCallback() {
      this.root.render(
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SceneComponent />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      );
    }
    disconnectedCallback() {
      this.root.unmount();
    }
  }
);
