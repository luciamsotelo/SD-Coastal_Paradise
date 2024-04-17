import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Loginpage from "./pages/login_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
