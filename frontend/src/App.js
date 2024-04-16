import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../src/components/header";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Render the Header component */}
      <Routes>
        <Route index element={<header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
