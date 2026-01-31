import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./app";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <CookiesProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      </CookiesProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
