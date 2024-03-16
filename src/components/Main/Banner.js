import React from "react";
import Slider from "react-slick";

import slider1 from "../../assets/html.png";
import slider2 from "../../assets/css.png";
import slider3 from "../../assets/bootstrap.png";
import slider4 from "../../assets/sass.png";
import slider5 from "../../assets/less.png";
import slider6 from "../../assets/js.png";
import slider7 from "../../assets/react.png";
import slider8 from "../../assets/git.png";
import slider9 from "../../assets/github.png";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 1,
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i) {
      return <div></div>;
    },
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  return (
    <div style={{ height: "225px", width: "100%" }} className="mx-auto py-5">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider1} alt="skills" />
            </div>
          </div>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider2} alt="skills" />
            </div>
          </div>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider3} alt="skills" />
            </div>
          </div>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider4} alt="skills" />
            </div>
          </div>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider5} alt="skills" />
            </div>
          </div>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider6} alt="skills" />
            </div>
          </div>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider7} alt="skills" />
            </div>
          </div>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider8} alt="skills" />
            </div>
          </div>
          <div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto p-2"
              style={{
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                width: "100px",
                height: "100px",
              }}
            >
              <img style={{ height: "55px" }} src={slider9} alt="skills" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
