import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Register from "./components/auth/register/register";
import PasswordRecovery from "./components/auth/passwordRecovery/passwordRecovery";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="passwordRecovery" element={<PasswordRecovery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// ReactDOM.createRoot(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
