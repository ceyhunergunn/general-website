import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import x from "../assets/x.png";

import network from "../assets/portfolio/network.png";
import network1 from "../assets/portfolio/portfolio-details-19.png";
import network2 from "../assets/portfolio/portfolio-details-20.png";
import network3 from "../assets/portfolio/portfolio-details-21.png";

import konut from "../assets/portfolio/konut.png";
import konut1 from "../assets/portfolio/portfolio-details-13.png";
import konut2 from "../assets/portfolio/portfolio-details-14.png";
import konut3 from "../assets/portfolio/portfolio-details-15.png";

import rtls from "../assets/portfolio/rtls.png";
import rtls1 from "../assets/portfolio/portfolio-details-16.png";
import rtls2 from "../assets/portfolio/portfolio-details-17.png";
import rtls3 from "../assets/portfolio/portfolio-details-18.png";

import device from "../assets/portfolio/device.png";
import device1 from "../assets/portfolio/device1.png";
import device2 from "../assets/portfolio/device2.png";

import menu from "../assets/portfolio/menu.png";
import menu1 from "../assets/portfolio/menu1.png";

import restaurant from "../assets/portfolio/restaurant.png";
import restaurant1 from "../assets/portfolio/restaurant1.png";
import restaurant2 from "../assets/portfolio/restaurant2.png";
import restaurant3 from "../assets/portfolio/restaurant3.png";

import bank from "../assets/portfolio/bank.png";
import bank5 from "../assets/portfolio/bank1.png";
import bank1 from "../assets/portfolio/bank2.png";
import bank2 from "../assets/portfolio/bank3.png";
import bank3 from "../assets/portfolio/bank4.png";
import bank4 from "../assets/portfolio/bank5.png";

import dashboard from "../assets/portfolio/dashboard.png";
import dashboard1 from "../assets/portfolio/dashboard1.png";
import dashboard2 from "../assets/portfolio/dashboard2.png";

import movie from "../assets/portfolio/movie.png";
import movie1 from "../assets/portfolio/movie1.png";
import movie2 from "../assets/portfolio/movie2.png";

const Portfolio = () => {
  const [project, setProject] = useState({ name: "", img: "", desc: "" });
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleCloseDetailModal = () => setShowDetailModal(false);
  const handleShowDetailModal = () => setShowDetailModal(true);

  return (
    <section
      className="section-portfolio d-flex align-items-center justify-content-center flex-column"
      id="section-portfolio"
    >
      <div className="col-md-12">
        {" "}
        <div className="section-heading text-center py-5">
          <h1>
            <strong>Portfolio</strong>
          </h1>
        </div>
      </div>
      <div className="row w-100 mx-auto">
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Network App. - Network Monitoring",
                  img1: network1,
                  img2: network2,
                  img3: network3,
                  img4: "",
                  img5: "",
                  link: "",
                  techs: "HTML, CSS, Bootstrap, JavaScript, React",
                  desc: "In this project, our goal was to create a software system that could track domains in networks, monitor SSL certificates, and manage mailboxes. With the use of playbooks within the system, users could define their own workflows, specifying when and from which triggers they would receive alerts. In this project, I converted the entire front-end process into code in accordance with the developed design.",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={network} alt="network" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            Network App.
          </div>
        </div>
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Device Management And Monitoring App.",
                  img1: device1,
                  img2: device2,
                  img3: "",
                  img4: "",
                  img5: "",
                  link: "",
                  techs: "HTML, CSS, Bootstrap, JavaScript, React",
                  desc: "Guardmon is an application that facilitates the monitoring and management of all components in the power chains of data centers. Its aim is to increase the efficiency of data center businesses and ensure uninterrupted operation by providing strong visibility to users. In this project, I developed frontend part of this project.",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={device} alt="device" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            Device Management App.
          </div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Menu Application",
                  img1: menu1,
                  img2: "",
                  img3: "",
                  img4: "",
                  img5: "",
                  link: "",
                  techs: "HTML, CSS, Bootstrap, JavaScript, React",
                  desc: "This project helps people order food and look at menus on a website using a QR code. You scan the code, see the menu, and pick what you want to eat. I did all the design and coding for how the website looks. I developed frontend part of this project",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={menu} alt="portfolio" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            Menu Application
          </div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Restaurant App.",
                  img1: restaurant1,
                  img2: restaurant2,
                  img3: restaurant3,
                  img4: "",
                  img5: "",
                  link: "https://restaurant.hicci.com.tr/",
                  techs: "HTML, CSS, Bootstrap, JavaScript, React",
                  desc: "In this project, I developed a website that showcases all the features and details of a restaurant. The website provides comprehensive information about the restaurant, ranging from its menu to its location, opening hours, and special events. I handled both the design and coding aspects of this website.",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={restaurant} alt="portfolio" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            Restaurant App.
          </div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Modern Bank Application",
                  img1: bank1,
                  img2: bank2,
                  img3: bank3,
                  img4: bank4,
                  img5: bank5,
                  link: "https://modern-bank-hicci.netlify.app/",
                  techs: "HTML, CSS, Tailwind, JavaScript, React",
                  desc: "In this project, I developed a website that showcases all the features and details of a bank. I handled both the design and coding aspects of this website.",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={bank} alt="portfolio" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            Modern Bank App.
          </div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Real-Time Locating System",
                  img1: rtls1,
                  img2: rtls2,
                  img3: rtls3,
                  img4: "",
                  img5: "",
                  link: "",
                  techs: "HTML, CSS, Bootstrap, JavaScript, React",
                  desc: "In this project, we aimed to develop a real-time location tracking system that could be used in factories, shipyards, and large-scale workplaces. Additionally, we incorporated functions such as personnel tracking, machinery tracking, and work hour monitoring into our software. In this project, I converted the entire front-end process into code in accordance with the developed design.",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={rtls} alt="portfolio" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            Real Time Location System
          </div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Movie App.",
                  img1: movie1,
                  img2: movie2,
                  img3: "",
                  img4: "",
                  img5: "",
                  link: "https://movie-ui.hicci.com.tr/",
                  techs: "HTML, CSS, Sass, Bootstrap, JavaScript, React",
                  desc: "In this project, I developed a website that showcases all the features and details of movies. I handled both the design and coding aspects of this website.",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={movie} alt="movie" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            Movie App.
          </div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Dashboard App.",
                  img1: dashboard1,
                  img2: dashboard2,
                  img3: "",
                  img4: "",
                  img5: "",
                  link: "https://dashboard-ui.hicci.com.tr/",
                  techs: "HTML, CSS, TailwindCSS, JavaScript, React",
                  desc: "In this project, I developed a website that showcases all the features and details of a company. I handled both the design and coding aspects of this website.",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={dashboard} alt="dashboard" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            Dashboard App.
          </div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div
            className="w-75 h-50 mx-auto portfolio-card-top"
            style={{ position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                top: "10",
                right: "10",
                cursor: "pointer",
              }}
              onClick={() => {
                setProject({
                  name: "Konut App. - House Tracking System",
                  img1: konut1,
                  img2: konut2,
                  img3: konut3,
                  img4: "",
                  img5: "",
                  link: "",
                  techs: "HTML, CSS, Bootstrap, JavaScript, React",
                  desc: "Team was to develop a house tracking application for a community housing project consisting of several housing estates. The application allows users to create and track payments, monitor announcements, create requests and reports for issues, and includes a payment system. In this project, I developed frontend part of this project.",
                });
                handleShowDetailModal();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="rgba(19, 104, 112,1)"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <img style={{ height: "80px" }} src={konut} alt="portfolio" />
          </div>
          <div className="w-75 h-50 mx-auto portfolio-card-bottom">
            House Tracking System
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Modal
        show={showDetailModal}
        size="xl"
        onHide={handleCloseDetailModal}
        // backdrop="static"
        contentClassName="content-bg"
        centered
      >
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-end">
            <img
              style={{ cursor: "pointer" }}
              className=""
              src={x}
              alt="x"
              onClick={handleCloseDetailModal}
            />
          </div>
          <div
            className="text-color2 text-start mb-3 d-flex"
            style={{ fontSize: "26px" }}
          >
            {project.name}
            {project.link !== "" ? (
              <div
                className="ms-3 link-btn"
                onClick={() => window.open(project.link)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div
            className="text-color2 text-start mb-3"
            style={{ fontSize: "22px", color: "rgba(255,255,255,0.6)" }}
          >
            {project.techs}
          </div>

          <div>
            <Carousel style={{ borderRadius: "24px" }}>
              {project.img1 !== "" ? (
                <Carousel.Item style={{ borderRadius: "24px" }}>
                  <img
                    style={{ borderRadius: "24px" }}
                    src={project.img1}
                    className="w-100"
                    alt="detail"
                  />
                </Carousel.Item>
              ) : null}
              {project.img2 !== "" ? (
                <Carousel.Item style={{ borderRadius: "24px" }}>
                  <img
                    style={{ borderRadius: "24px" }}
                    src={project.img2}
                    className="w-100"
                    alt="detail"
                  />
                </Carousel.Item>
              ) : null}
              {project.img3 !== "" ? (
                <Carousel.Item style={{ borderRadius: "24px" }}>
                  <img
                    style={{ borderRadius: "24px" }}
                    src={project.img3}
                    className="w-100"
                    alt="detail"
                  />
                </Carousel.Item>
              ) : null}
              {project.img4 !== "" ? (
                <Carousel.Item style={{ borderRadius: "24px" }}>
                  <img
                    style={{ borderRadius: "24px" }}
                    src={project.img4}
                    className="w-100"
                    alt="detail"
                  />
                </Carousel.Item>
              ) : null}
              {project.img5 !== "" ? (
                <Carousel.Item style={{ borderRadius: "24px" }}>
                  <img
                    style={{ borderRadius: "24px" }}
                    src={project.img5}
                    className="w-100"
                    alt="detail"
                  />
                </Carousel.Item>
              ) : null}
            </Carousel>
          </div>
          <div>
            <div className="my-3 py-4" style={{ fontSize: "18px" }}>
              {project.desc}
            </div>
          </div>
          <div className="w-100 px-4 d-flex align-items-center justify-content-end">
            <div
              onClick={handleCloseDetailModal}
              className="d-flex align-items-center justify-content-center"
              style={{
                border: "1px solid #fff",
                height: "54px",
                width: "150px",
                borderRadius: "16px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Close
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Portfolio;
