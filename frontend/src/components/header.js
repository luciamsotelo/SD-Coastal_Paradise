import React from "react";

const Header = () => {
  return (
    <h1
      className="pt-2 text-center"
      style={{
        background: "#0095b6",
        fontSize: "5vw", // Adjust font size based on viewport width
        color: "#ffb79d",
        textShadow: "2px 5px 10px #0dba86",
        width: "100vw", // Take up the whole width of the viewport
        margin: 0, // Remove default margin
        padding: "20px 0", // Add padding to the top and bottom
      }}
    >
      San Diego Coastal Paradise
    </h1>
  );
};

export default Header;
