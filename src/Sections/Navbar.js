import React from "react";
import logo from "../assets/logo.png";
import Hamburger from "hamburger-react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="navbar">
      <div className="d-flex align-items-center justify-content-between px-3 w-100">
        <img src={logo} style={{ height: "70px" }} alt="logo" />
        <div>
          {menuOpen ? null : (
            <div className="navbar-item-container d-none d-md-flex d-lg-flex d-xl-flex align-items-center">
              <div className="me-5 navbar-item">
                <a href="#section-hero" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </div>
              <div className="me-5 navbar-item">
                <a href="#section-portfolio" onClick={() => setMenuOpen(false)}>
                  Portfolio
                </a>
              </div>
              <div className="navbar-item">
                <a href="#section-contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
          <div
            className={
              menuOpen
                ? "d-flex"
                : "d-flex d-md-none d-lg-none d-xl-none align-items-center"
            }
          >
            <Hamburger
              direction="right"
              color="#60e5ab"
              toggled={menuOpen}
              onToggle={(toggle) => {
                setMenuOpen(toggle);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
