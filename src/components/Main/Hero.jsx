import React, { useEffect, useState } from "react";
import avatar from "../../assets/character/ceyhun-hero.png";
import charbg from "../../assets/character/skecth.png";

const TypeWriter = ({ words, wait = 3000 }) => {
  const [txt, setTxt] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 / 2 : 200;
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    const typeTimer = setTimeout(() => {
      if (isDeleting) {
        setTxt((prevTxt) => prevTxt.substring(0, prevTxt.length - 1));
      } else {
        setTxt((prevTxt) => fullTxt.substring(0, prevTxt.length + 1));
      }

      if (!isDeleting && txt === fullTxt) {
        setIsDeleting(true);
        setWordIndex((prevIndex) => prevIndex + 1);
      } else if (isDeleting && txt === "") {
        setIsDeleting(false);
      }
    }, typeSpeed);

    return () => clearTimeout(typeTimer);
  }, [txt, isDeleting, wordIndex, words]);

  useEffect(() => {
    const waitTimer = setTimeout(() => {
      setIsDeleting(false);
      setWordIndex((prevIndex) => prevIndex + 1);
    }, wait);

    return () => clearTimeout(waitTimer);
  }, [wait, wordIndex]);

  return (
    <span
      className="txt"
      style={{ color: "white", fontWeight: "bold", fontSize: "60px" }}
    >
      {txt}
    </span>
  );
};

const Hero = () => {
  const words = ["Ceyhun", "Developer", "Engineer"];
  const wait = 3000;
  return (
    <div className="h-100 w-100 d-flex align-items-center py-5 hero-bg">
      <div className="row w-100 intro-text align-items-center justify-content-center mx-auto">
        <div className="col-lg-6 col-md-6 col-sm-12 p-5 d-flex align-items-center justify-content-center">
          <h1
            className="text-center main-text w-100"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "50px",
              lineHeight: "6rem",
            }}
          >
            Hello, I'm
            <br />
            <TypeWriter words={words} wait={wait} />
          </h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center char-bg">
          {/* <img src={charbg} alt="avatar" className="w-100" /> */}
          <img
            src={avatar}
            alt="avatar"
            className="w-100"
            style={{ minHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
