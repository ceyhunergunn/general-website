import React from "react";

const SkillItem = ({ img, name, fromid, toid }) => {
  return (
    <>
      <div className="col-lg-4 mx-auto col-md-6 col-sm-6 p-3">
        <div className="w-75 mx-auto h-100" id={fromid}>
          <div className="mx-auto skills-card-top">
            <img
              style={
                name === "Tailwind"
                  ? { height: "50px", width: "80px" }
                  : name === "CSS"
                  ? { height: "90px", width: "90px" }
                  : { height: "80px" }
              }
              src={img}
              alt="skills"
            />
          </div>
          <div className="mx-auto skills-card-bottom">{name}</div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
