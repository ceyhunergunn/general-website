import React from "react";
import logo from "../assets/logo.png";
import Hamburger from "hamburger-react";
import { ThemeButton } from "../components/Button/ThemeButton";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="navbar">
      <div className="d-flex align-items-center justify-content-between px-3 w-100">
        <img src={logo} style={{ height: "70px" }} alt="logo" />
        <div>
          {menuOpen ? null : (
            <div className="navbar-item-container d-none d-md-flex d-lg-flex d-xl-flex align-items-center">
              <div className="me-5 navbar-item">
                <ThemeButton />
              </div>
              <div className="me-5 navbar-item">
                <a href="#section-hero" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </div>
              <div className="me-5 navbar-item">
                <a href="#section-skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
              </div>
              <div className="me-5 navbar-item">
                <a href="#section-portfolio" onClick={() => setMenuOpen(false)}>
                  Portfolio
                </a>
              </div>
              <div className="me-5 navbar-item">
                <a href="#last-section" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
          <div
            className={
              menuOpen
                ? "d-flex gap-2"
                : "d-flex gap-2 d-md-none d-lg-none d-xl-none align-items-center"
            }
          >
            <ThemeButton />
            <Hamburger
              direction="right"
              color="#136870"
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
