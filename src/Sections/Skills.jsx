import React from "react";
import { motion } from "framer-motion";

import slider1 from "../assets/skills/html.png";
import slider2 from "../assets/skills/css.png";
import slider3 from "../assets/skills/bootstrap.png";
import slider4 from "../assets/skills/sass.png";
import slider5 from "../assets/skills/less.png";
import slider6 from "../assets/skills/js.png";
import slider7 from "../assets/skills/react.png";
import slider8 from "../assets/skills/git.png";
import slider10 from "../assets/skills/ts.png";
import slider11 from "../assets/skills/tailwind.png";
import SkillItem from "../components/Skills/SkillItem";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="section-skills d-flex align-items-center justify-content-center flex-column"
      id="section-skills"
    >
      <div className="col-md-12">
        {" "}
        <div className="section-heading text-center py-5">
          <h1>
            <strong style={{ fontSize: "40px" }}>Skills</strong>
          </h1>
        </div>
      </div>
      <div className="row w-100 mx-auto">
        <SkillItem img={slider1} name={"HTML"} fromid={"html"} toid={"css"} />
        <SkillItem
          img={slider2}
          name={"CSS"}
          fromid={"css"}
          toid={"bootstrap"}
        />
        <SkillItem
          img={slider6}
          name={"JavaScript"}
          fromid={"javascript"}
          toid={"typescript"}
        />
        <SkillItem
          img={slider10}
          name={"TypeScript"}
          fromid={"typescript"}
          toid={"react"}
        />
        <SkillItem img={slider7} name={"React"} fromid={"react"} toid={"git"} />
        <SkillItem
          img={slider11}
          name={"Tailwind"}
          fromid={"bootstrap"}
          toid={"sass"}
        />
        <SkillItem
          img={slider3}
          name={"Bootstrap"}
          fromid={"bootstrap"}
          toid={"sass"}
        />
        <SkillItem img={slider4} name={"Sass"} fromid={"sass"} toid={"less"} />
        <SkillItem
          img={slider5}
          name={"Less"}
          fromid={"less"}
          toid={"javascript"}
        />
        <SkillItem img={slider8} name={"Git"} fromid={"git"} toid={""} />
      </div>
    </motion.div>
  );
};

export default Skills;
