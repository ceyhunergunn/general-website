import React from "react";
import allarmia from "../assets/allarmia.png";
import guardmon from "../assets/guardmon.png";
import menu from "../assets/menu.png";
import allarmia1 from "../assets/profile.png";
import allarmia2 from "../assets/profile2.png";
import guardmon1 from "../assets/guardmon1.png";
import guardmon2 from "../assets/guardmon2.png";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import PortfolioItem from "../components/Portfolio/PortfolioItem";
const Portfolio = () => {
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
        <PortfolioItem
          logo={allarmia}
          img1={allarmia1}
          img2={allarmia2}
          name={"Allarmia"}
          link={"https://allarmia.com"}
          isLink={true}
        />
        <PortfolioItem
          logo={guardmon}
          img1={guardmon1}
          img2={guardmon2}
          name={"Guardmon"}
          link={"https://guardmon.com"}
          isLink={true}
        />
        <PortfolioItem
          logo={menu}
          img1={menu1}
          img2={menu2}
          name={"Menu Application"}
          link={""}
          isLink={false}
        />
      </div>
    </section>
  );
};

export default Portfolio;
