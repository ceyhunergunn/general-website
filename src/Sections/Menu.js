import React from "react";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return menuOpen ? (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        position: "fixed",
        top: "0px",
        right: "0px",
        paddingTop: "60px",
        paddingBottom: "60px",
        zIndex: "998",
      }}
    >
      <div className="text-center navbar-item navbar-item-toggle my-3">
        <a href="#section-hero" onClick={() => setMenuOpen(false)}>
          Home
        </a>
      </div>
      <div className="text-center navbar-item navbar-item-toggle my-3">
        <a href="#section-portfolio" onClick={() => setMenuOpen(false)}>
          Portfolio
        </a>
      </div>
      <div className="text-center navbar-item navbar-item-toggle my-3">
        <a href="#section-contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
    </div>
  ) : null;
};

export default Menu;
