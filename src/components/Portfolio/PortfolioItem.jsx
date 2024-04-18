import React from "react";
// import ReactCompareImage from "react-compare-image";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import bootstrap from "../../assets/bootstrap.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";

const PortfolioItem = ({ logo, img, name, link, isLink = false }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-3 mx-auto">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <img
          src={logo}
          className="me-3"
          alt="allarmia logo"
          style={{ height: "60px" }}
        />
        <div style={{ fontSize: "24px" }}>{name}</div>
        {isLink === false ? null : (
          <div
            className="open-btn text-center text-dark d-flex align-items-center justify-content-between"
            onClick={() => window.open(link)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-box-arrow-up-right m-auto"
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
        )}
      </div>
      <div className="mx-auto">
        <img
          style={{ width: "100%", borderRadius: "24px" }}
          className="my-1"
          src={img}
          alt="img"
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img style={{ height: "55px" }} src={js} alt="skills" />
      </div>
    </div>
  );
};

export default PortfolioItem;
