import React from "react";
import Cards from "../components/cards";
import Navigation from "../components/navigation";
import Header from "../components/header";
import Footer from "../components/footer";

const beaches = () => {
  return (
    <div>
      <Navigation />
      <Header/>
      <Cards />
      <Footer />
    </div>
  );
};

export default beaches;
