import React from "react";

const Header = ({ message }) => {
  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.1)",
        padding: "16px 32px",
        color: "black",
        fontWeight: "bolder",
        fontSize: "2rem",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      {message}
    </div>
  );
};

export default Header;
