import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Accordion from "../components/accordion";
import Navigation from "../components/navigation";

function About() {
    return (
        <div>
            <Navigation />
            <Header />
            <Accordion />  
            <Footer />
        </div>
    );
}

export default About;