import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resources from "./pages/Resources/Resources";
import reportWebVitals from './reportWebVitals';
import Privacy from "./pages/Privacy/Privacy";
// import Donate from "./pages/Donate/Donate";
import ReactDOM from 'react-dom/client';
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import Home from "./pages/Home/Home";
import React from 'react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home/>} /> 
      <Route path="/about" element={<About/>} />
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/team" element={<Team/>}/>
      {/* <Route path="/donate" element={<Donate/>}/> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();