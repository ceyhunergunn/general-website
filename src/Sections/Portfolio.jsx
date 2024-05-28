import React from "react";

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
          img1={network1}
          img2={network2}
          img3={network3}
          img4={""}
          img5={""}
          name={"Network App. - Network Monitoring"}
          projectName={"Network Monitoring Application"}
          link={""}
          techs={"HTML, CSS, Bootstrap, JavaScript, React"}
          desc={
            "In this project, our goal was to create a software system that could track domains in networks, monitor SSL certificates, and manage mailboxes. With the use of playbooks within the system, users could define their own workflows, specifying when and from which triggers they would receive alerts. In this project, I converted the entire front-end process into code in accordance with the developed design."
          }
        />
        <PortfolioItem
          logo={device}
          img1={device1}
          img2={device2}
          img3={""}
          img4={""}
          img5={""}
          name={"Device Management And Monitoring App."}
          projectName={"Device Management App."}
          link={""}
          techs={"HTML, CSS, Bootstrap, JavaScript, React"}
          desc={
            "Guardmon is an application that facilitates the monitoring and management of all components in the power chains of data centers. Its aim is to increase the efficiency of data center businesses and ensure uninterrupted operation by providing strong visibility to users. In this project, I developed frontend part of this project."
          }
        />
        <PortfolioItem
          logo={menu}
          img1={menu1}
          img2={""}
          img3={""}
          img4={""}
          img5={""}
          name={"Menu Application"}
          projectName={"Menu Application"}
          link={""}
          techs={"HTML, CSS, Bootstrap, JavaScript, React"}
          desc={
            "This project helps people order food and look at menus on a website using a QR code. You scan the code, see the menu, and pick what you want to eat. I did all the design and coding for how the website looks. I developed frontend part of this project"
          }
        />
        <PortfolioItem
          logo={restaurant}
          img1={restaurant1}
          img2={restaurant2}
          img3={restaurant3}
          img4={""}
          img5={""}
          name={"Restaurant App."}
          projectName={"Restaurant Application"}
          link={"https://restaurant.hicci.com.tr/"}
          techs={"HTML, CSS, Bootstrap, JavaScript, React"}
          desc={
            "In this project, I developed a website that showcases all the features and details of a restaurant. The website provides comprehensive information about the restaurant, ranging from its menu to its location, opening hours, and special events. I handled both the design and coding aspects of this website."
          }
        />
        <PortfolioItem
          logo={bank}
          img1={bank1}
          img2={bank2}
          img3={bank3}
          img4={bank4}
          img5={bank5}
          name={"Modern Bank Application"}
          projectName={"Modern Bank Application"}
          link={"https://modern-bank-hicci.netlify.app/"}
          techs={"HTML, CSS, TailwindCSS, JavaScript, React"}
          desc={
            "In this project, I developed a website that showcases all the features and details of a bank. I handled both the design and coding aspects of this website."
          }
        />
        <PortfolioItem
          logo={rtls}
          img1={rtls1}
          img2={rtls2}
          img3={rtls3}
          img4={""}
          img5={""}
          name={"Real-Time Locating System"}
          projectName={"Real-Time Locating System"}
          link={""}
          techs={"HTML, CSS, Bootstrap, JavaScript, React"}
          desc={
            "In this project, we aimed to develop a real-time location tracking system that could be used in factories, shipyards, and large-scale workplaces. Additionally, we incorporated functions such as personnel tracking, machinery tracking, and work hour monitoring into our software. In this project, I converted the entire front-end process into code in accordance with the developed design."
          }
        />
        <PortfolioItem
          logo={movie}
          img1={movie1}
          img2={movie2}
          img3={""}
          img4={""}
          img5={""}
          name={"Movie App."}
          projectName={"Movie Application"}
          link={"https://movie-ui.hicci.com.tr/"}
          techs={"HTML, CSS, Sass, Bootstrap, JavaScript, React"}
          desc={
            "In this project, I developed a website that showcases all the features and details of movies. I handled both the design and coding aspects of this website."
          }
        />
        <PortfolioItem
          logo={dashboard}
          img1={dashboard1}
          img2={dashboard2}
          img3={""}
          img4={""}
          img5={""}
          name={"Dashboard App."}
          projectName={"Dashboard Application"}
          link={"https://dashboard-ui.hicci.com.tr/"}
          techs={"HTML, CSS, TailwindCSS, JavaScript, React"}
          desc={
            "In this project, I developed a website that showcases all the features and details of a company. I handled both the design and coding aspects of this website."
          }
        />
        <PortfolioItem
          logo={konut}
          img1={konut1}
          img2={konut2}
          img3={konut3}
          img4={""}
          img5={""}
          name={"Konut App. - House Tracking System"}
          projectName={"House Tracking System"}
          link={""}
          techs={"HTML, CSS, Bootstrap, JavaScript, React"}
          desc={
            "Team was to develop a house tracking application for a community housing project consisting of several housing estates. The application allows users to create and track payments, monitor announcements, create requests and reports for issues, and includes a payment system. In this project, I developed frontend part of this project."
          }
        />
      </div>
    </section>
  );
};

export default Portfolio;
