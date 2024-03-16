import React from "react";

const Menu = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="menu">
        <div
          className="menu-item w-100 text-center"
          onClick={() =>
            (window.location.href = "https://resume.hicci.com.tr/")
          }
        >
          Resume
        </div>
        <div
          className="menu-item w-100 text-center"
          onClick={() =>
            (window.location.href = "https://portfolio.hicci.com.tr/")
          }
        >
          Portfolio
        </div>
      </div>
    </div>
  );
};

export default Menu;
