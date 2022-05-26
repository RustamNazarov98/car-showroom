import React from "react";
import "./App.css";
import "./Global.css"
import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {HomePage} from './pages/HomePage';
import { About } from "./pages/About";
import { Card } from "./components";  


function App() {

  return ( 
  <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<About />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
