import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function Footer() {
  return (
    <footer className="site-footer" data-aos="zoom-in">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12 text-center">
            <p>
              {/* <div
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/ceyhun.ergn")
                }
                className="social-item"
              >
                <span className="icon-facebook2" />
              </div>
              <div
                className="social-item"
                onClick={() =>
                  (window.location.href = "https://twitter.com/CeyhnErgn")
                }
              >
                <span className="icon-twitter" />
              </div>
              <div
                className="social-item"
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/ceyhunergunn/")
                }
              >
                <span className="icon-instagram2" />
              </div> */}
              {/* eslint-disable-next-line  */}
              <div
                className="social-item"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/ergunceyhun/")
                }
              >
                <div className="w-100 h-100 d-flex align-items-cetner justify-content-center">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              {/* eslint-disable-next-line  */}
              <div
                className="social-item"
                onClick={() =>
                  (window.location.href = "https://github.com/ceyhunergunn")
                }
              >
                <div className="w-100 h-100 d-flex align-items-cetner justify-content-center">
                  <img
                    src={github}
                    alt="github"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="row">
          <p className="col-12 text-center">
            Copyright © 2024 Ceyhun Ergün - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
