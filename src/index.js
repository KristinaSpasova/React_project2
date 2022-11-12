import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./components/App";
import Error from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
