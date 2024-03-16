import React from "react";

function Contact() {
  return (
    <section className="site-section mt-5" id="section-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {" "}
            <div className="section-heading text-center">
              <h2>
                <strong>Get In Touch</strong>
              </h2>
            </div>
          </div>
          <div className="col-md-12 pl-md-12">
            <ul className="site-contact-details row">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Email
                </div>
                <div
                  className="d-flex align-items-center justify-content-center flex-column"
                  style={{ height: "75px" }}
                >
                  <div className="text-white">
                    <a
                      className="contact-tag"
                      href="mailto:iamceyhunergun@gmail.com"
                    >
                      iamceyhunergun@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Phone
                </div>
                <div
                  className="d-flex align-items-center justify-content-center flex-column"
                  style={{ height: "75px" }}
                >
                  <a className="contact-tag" href="tel:+905383115789">
                    +90 538 311 5789
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <div className="text-uppercase" style={{ color: "#60e5ab" }}>
                  Address
                </div>
                <div
                  className="d-flex align-items-center justify-content-center flex-column"
                  style={{ height: "75px" }}
                >
                  Istanbul, Turkey
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
