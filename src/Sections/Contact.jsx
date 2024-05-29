import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const to_name = "Ceyhun";
  const [from_name, setFrom_name] = useState("");
  const [from_email, setFrom_email] = useState("");
  const [message, setMessage] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    color: "#fff",
    background: "#136870",
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_i1efp5p",
        "template_uaa4vqx",
        { to_name, from_name, from_email, message },
        {
          publicKey: "eGXBH890gGxZhml10",
        }
      )
      .then(
        () => {
          Toast.fire({
            icon: "success",
            title: "Message sent successfully.",
          });
          setFrom_email("");
          setFrom_name("");
          setMessage("");
          window.scrollTo(0, 0);
        },
        (error) => {
          Toast.fire({
            icon: "error",
            title: "Something went wrong!",
          });
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="section-contact"
      id="section-contact"
    >
      <div className="row w-100 mx-auto">
        <div className="col-md-12 mb-3">
          {" "}
          <div className="text-center">
            <h1>
              <strong>Get In Touch</strong>
            </h1>
          </div>
        </div>
        <div className="col-md-12 pl-md-12">
          <form onSubmit={sendEmail} className="mb-5">
            <div className="row mx-auto w-100">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="mb-1" style={{ fontSize: "22px" }}>
                  Name
                </div>
                <input
                  required
                  placeholder="Name"
                  name="from_name"
                  type="input"
                  value={from_name}
                  onChange={(e) => setFrom_name(e.target.value)}
                  className="input"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="mb-1" style={{ fontSize: "22px" }}>
                  E-Mail
                </div>
                <input
                  required
                  placeholder="E-Mail"
                  type="email"
                  name="from_email"
                  value={from_email}
                  onChange={(e) => setFrom_email(e.target.value)}
                  className="input"
                />
              </div>
              <div className="col-12 mb-3">
                <div className="mb-1" style={{ fontSize: "22px" }}>
                  Message
                </div>
                <textarea
                  required
                  placeholder="Message"
                  name="message"
                  type="input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-area"
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <input type="submit" value="Send" className="send-btn" />
            </div>
          </form>
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
