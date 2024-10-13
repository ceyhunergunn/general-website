import React from "react";
import { motion } from "framer-motion";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return menuOpen ? (
    <motion.div
      className="d-flex flex-column align-items-center justify-content-center menu-container"
      initial={{ x: 767, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <div className="text-center navbar-item navbar-item-toggle my-3">
        <a href="#section-hero" onClick={() => setMenuOpen(false)}>
          Home
        </a>
      </div>
      <div className="text-center navbar-item navbar-item-toggle my-3">
        <a href="#section-skills" onClick={() => setMenuOpen(false)}>
          Skills
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
    </motion.div>
  ) : null;
};

export default Menu;
