import React from "react";
import Banner from "../components/Main/Banner";
import Hero from "../components/Main/Hero";
import ReactCompareImage from "react-compare-image";
import allarmia from "../assets/allarmia.png";
import guardmon from "../assets/guardmon.png";
import menu from "../assets/menu.png";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import guardmon1 from "../assets/guardmon1.png";
import guardmon2 from "../assets/guardmon2.png";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
const Portfolio = () => {
  const style = {
    borderRadius: "24px",
  };
  return (
    <section className="section-portfolio" id="section-portfolio">
      <div className="row w-100 mx-auto">
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex align-items-center justify-content-center mb-3">
            {" "}
            <img
              src={allarmia}
              className="me-3"
              alt="allarmia logo"
              style={{ width: "60px" }}
            />
            <div style={{ fontSize: "24px" }}>Allarmia</div>
            <div
              className="open-btn text-center text-dark d-flex align-items-center justify-content-between"
              onClick={() => window.open("https://allarmia.com")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-box-arrow-up-right m-auto"
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
          </div>
          <div style={{ width: "90%" }} className="mx-auto">
            <ReactCompareImage
              leftImage={profile}
              rightImage={profile2}
              leftImageLabel="Figma Design"
              rightImageLabel="Developed Design"
              sliderLineColor="#60e5ab"
              leftImageCss={style}
              rightImageCss={style}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <div className="d-flex align-items-center justify-content-center mb-3">
            {" "}
            <img
              src={guardmon}
              className="me-3"
              alt="allarmia logo"
              style={{ width: "60px" }}
            />
            <div style={{ fontSize: "24px" }}>Guardmon</div>
            <div
              className="open-btn text-center text-dark d-flex align-items-center justify-content-between"
              onClick={() => window.open("https://guardmon.com")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-box-arrow-up-right m-auto"
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
          </div>
          <div style={{ width: "90%" }} className="mx-auto">
            <ReactCompareImage
              leftImage={guardmon1}
              rightImage={guardmon2}
              leftImageLabel="Figma Design"
              rightImageLabel="Developed Design"
              sliderLineColor="#60e5ab"
              leftImageCss={style}
              rightImageCss={style}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3 mx-auto">
          <div className="d-flex align-items-center justify-content-center mb-3">
            {" "}
            <img
              src={menu}
              className="me-3"
              alt="allarmia logo"
              style={{ width: "60px" }}
            />
            <div style={{ fontSize: "24px" }}>Menu Application</div>
          </div>
          <div style={{ width: "90%" }} className="mx-auto">
            <ReactCompareImage
              leftImage={menu1}
              rightImage={menu2}
              leftImageLabel="Figma Design"
              rightImageLabel="Developed Design"
              sliderLineColor="#60e5ab"
              leftImageCss={style}
              rightImageCss={style}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
