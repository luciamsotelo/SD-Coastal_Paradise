import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home_page";
import Register from "./pages/new_user";
import Current from "./pages/current_user";
import Cards from "../src/pages/beaches";
import Imperial from "./pages/destinations/imperial";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/current" element={<Current />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/imperial" element={<Imperial />} />
        
  
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
