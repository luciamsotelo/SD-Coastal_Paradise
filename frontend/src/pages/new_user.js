import Register from "../components/buddy_form";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Navigation from "../components/navigation";

const new_user = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Register />
      <Footer />
    </div>
  );
};

export default new_user;
