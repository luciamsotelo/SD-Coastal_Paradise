import Register from "../components/buddy_form";
import React from "react";
import Header from "../components/navigation";
import Footer from "../components/footer";

const new_user = () => {
  return (
    <div>
      <Header />
      <Register />
      <Footer />
    </div>
  );
};

export default new_user;
