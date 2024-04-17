import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home_page";
import Register from "./pages/new_user";
import Current from "./pages/current_user";
import Cards from "./components/cards";
import Image from "./components/image_card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/current" element={<Current />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/image" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
