import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import x from "../../assets/x.png";

const PortfolioItem = ({
  logo,
  img1,
  img2,
  img3,
  img4,
  img5,
  name,
  projectName,
  link,
  techs,
  desc,
}) => {
  const [project, setProject] = useState({ name: "", img: "", desc: "" });
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleCloseDetailModal = () => setShowDetailModal(false);
  const handleShowDetailModal = () => setShowDetailModal(true);
  return (
    <>
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
                name: name,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
                link: link,
                techs: techs,
                desc: desc,
              });
              handleShowDetailModal();
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="rgba(19, 104, 112,1)"
            className="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
          <img style={{ height: "80px" }} src={logo} alt={name} />
        </div>
        <div className="w-75 h-50 mx-auto portfolio-card-bottom">
          {projectName}
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
                  className="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fillRule="evenodd"
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
    </>
  );
};

export default PortfolioItem;
