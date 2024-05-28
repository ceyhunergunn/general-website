import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="section-contact"
      id="section-contact"
    >
      <div className="row w-100 mx-auto">
        <div className="col-md-12">
          {" "}
          <div className="text-center">
            <h1>
              <strong>Get In Touch</strong>
            </h1>
          </div>
        </div>
        <div className="col-md-12 pl-md-12">
          <ul className="site-contact-details row">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="text-uppercase" style={{ color: "#136870" }}>
                Email
              </div>
              <div
                className="d-flex align-items-center justify-content-center flex-column"
                style={{ height: "75px" }}
              >
                <div className="text-white">
                  <a
                    className="contact-tag"
                    href="mailto:iamceyhunergun@gmail.com"
                  >
                    iamceyhunergun@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="text-uppercase" style={{ color: "#136870" }}>
                Phone
              </div>
              <div
                className="d-flex align-items-center justify-content-center flex-column"
                style={{ height: "75px" }}
              >
                <a className="contact-tag" href="tel:+905383115789">
                  +90 538 311 5789
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="text-uppercase" style={{ color: "#136870" }}>
                Address
              </div>
              <div
                className="d-flex align-items-center justify-content-center flex-column"
                style={{ height: "75px" }}
              >
                Istanbul, Turkey
              </div>
            </div>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
