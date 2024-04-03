import React from "react";
import Banner from "../components/Main/Banner";
import Hero from "../components/Main/Hero";

const Main = () => {
  return (
    <section
      className="section-hero d-flex align-items-center justify-content-center flex-column"
      id="section-hero"
    >
      <Hero />
      <Banner />
    </section>
  );
};

export default Main;
