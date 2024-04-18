import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import x from "../assets/x.png";

// import allarmia from "../assets/allarmia.png";
import network from "../assets/network.png";
import network1 from "../assets/portfolio/portfolio-details-19.png";
import network2 from "../assets/portfolio/portfolio-details-20.png";
import network3 from "../assets/portfolio/portfolio-details-21.png";

import konut1 from "../assets/portfolio/portfolio-details-13.png";
import konut2 from "../assets/portfolio/portfolio-details-14.png";
import konut3 from "../assets/portfolio/portfolio-details-15.png";

import rtls1 from "../assets/portfolio/portfolio-details-16.png";
import rtls2 from "../assets/portfolio/portfolio-details-17.png";
import rtls3 from "../assets/portfolio/portfolio-details-18.png";

import device1 from "../assets/portfolio/device1.png";
import device2 from "../assets/portfolio/device2.png";

import device from "../assets/device.png";
// import guardmon from "../assets/guardmon.png";
import menu from "../assets/menu.png";
import konut from "../assets/konut.png";
import rtls from "../assets/rtls.png";
import restaurant from "../assets/restaurant.png";
import restaurant2 from "../assets/restaurant2.png";
import allarmia2 from "../assets/profile2.png";
// import rtls2 from "../assets/rtls2.png";
// import device2 from "../assets/device2.png";
// import konut2 from "../assets/konut2.png";
// import guardmon2 from "../assets/guardmon2.png";
import menu2 from "../assets/menu2.png";
import PortfolioItem from "../components/Portfolio/PortfolioItem";
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
                  name: "Network App.",
                  img1: network1,
                  img2: network2,
                  img3: network3,
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
                  name: "Network App.",
                  img1: network1,
                  img2: network2,
                  img3: network3,
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
            <img style={{ height: "80px" }} src={konut} alt="portfolio" />
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
                  name: "Real-Time Locating Software",
                  img1: rtls1,
                  img2: rtls2,
                  img3: rtls3,
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
            Real Time Location Software
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
                  techs: "HTML, CSS, Bootstrap, JavaScript, React",
                  desc: "Team was to develop a house tracking application for a community housing project consisting of several housing estates. The application allows users to create and track payments, monitor announcements, create requests and reports for issues, and includes a payment system. In this project, I converted the entire front-end process into code in accordance with the developed design.",
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
            House Tracking System
          </div>
        </div>
      </div>
      {/* <div className="row w-100 mx-auto">
        <PortfolioItem
          logo={network}
          img={allarmia2}
          name={"Network App."}
          link={"https://allarmia.com"}
          isLink={true}
        />
        <PortfolioItem
          logo={device}
          img={device2}
          name={"Device Management App."}
          link={"https://guardmon.com"}
          isLink={true}
        />
        <PortfolioItem
          logo={menu}
          img={menu2}
          name={"Menu Application"}
          link={""}
          isLink={false}
        />
        <PortfolioItem
          logo={restaurant}
          img={restaurant2}
          name={"Restaurant App."}
          link={"https://restaurant.hicci.com.tr"}
          isLink={true}
        />
        <PortfolioItem
          logo={rtls}
          img={rtls2}
          name={"Real Time Location System"}
          link={""}
          isLink={false}
        />
        <PortfolioItem
          logo={konut}
          img={konut2}
          name={"House Tracking System"}
          link={""}
          isLink={false}
        />
      </div> */}

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
            className="text-color2 text-start mb-3"
            style={{ fontSize: "26px" }}
          >
            {project.name}
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
              Kapat
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Portfolio;
