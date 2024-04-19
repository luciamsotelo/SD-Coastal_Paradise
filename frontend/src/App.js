import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home_page";
import Register from "./pages/new_user";
import Current from "./pages/current_user";
import Cards from "../src/pages/beaches";
import Imperial from "./pages/destinations/imperial";
import Coronado from "./pages/destinations/coronado";
import Ocean from "./pages/destinations/ocean";
import Mission from "./pages/destinations/mission";
import Pacific from "./pages/destinations/pacific";
import Jolla from "./pages/destinations/jolla";
import Encinitas from "./pages/destinations/encinitas";
import Carlsbad from "./pages/destinations/carlsbad";
import Oceanside from "./pages/destinations/oceanside";
import About from "./pages/about"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/current" element={<Current />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/imperial" element={<Imperial />} />
        <Route path="/coronado" element={<Coronado />} />
        <Route path="/ocean" element={<Ocean />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/pacific" element={<Pacific />} />
        <Route path="/jolla" element={<Jolla />} />
        <Route path="/encinitas" element={<Encinitas />} />
        <Route path="/carlsbad" element={<Carlsbad />} />
        <Route path="/oceanside" element={<Oceanside />} />
        <Route path="/about" element={<About />} />
       
        
  
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
