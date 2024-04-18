import React from "react";
// import allarmia from "../assets/allarmia.png";
import network from "../assets/network.png";
import device from "../assets/device.png";
// import guardmon from "../assets/guardmon.png";
import menu from "../assets/menu.png";
import konut from "../assets/konut.png";
import rtls from "../assets/rtls.png";
import restaurant from "../assets/restaurant.png";
import restaurant2 from "../assets/restaurant2.png";
import allarmia2 from "../assets/profile2.png";
import rtls2 from "../assets/rtls2.png";
import device2 from "../assets/device2.png";
import konut2 from "../assets/konut2.png";
// import guardmon2 from "../assets/guardmon2.png";
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
      </div>
    </section>
  );
};

export default Portfolio;
