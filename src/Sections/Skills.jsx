import React from "react";
import slider1 from "../assets/skills/html.png";
import slider2 from "../assets/skills/css.png";
import slider3 from "../assets/skills/bootstrap.png";
import slider4 from "../assets/skills/sass.png";
import slider5 from "../assets/skills/less.png";
import slider6 from "../assets/skills/js.png";
import slider7 from "../assets/skills/react.png";
import slider8 from "../assets/skills/git.png";
import slider10 from "../assets/skills/ts.png";

const Skills = () => {
  return (
    <section
      className="section-skills d-flex align-items-center justify-content-center flex-column"
      id="section-skills"
    >
      <div className="col-md-12">
        {" "}
        <div className="section-heading text-center py-5">
          <h1>
            <strong>Skills</strong>
          </h1>
        </div>
      </div>
      <div className="row w-100 mx-auto">
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider1} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">HTML</div>
        </div>
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider2} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">CSS</div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider3} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">Bootstrap</div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider4} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">Sass</div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider5} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">Less</div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider6} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">JavaScript</div>
        </div>
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider10} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">TypeScript</div>
        </div>
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider7} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">React</div>
        </div>{" "}
        <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
          <div className="w-75 mx-auto skills-card-top">
            <img style={{ height: "80px" }} src={slider8} alt="skills" />
          </div>
          <div className="w-75 mx-auto skills-card-bottom">Git</div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Skills;
