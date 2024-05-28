import React from "react";
import cv from "../../assets/Ceyhun_Ergun_CV.pdf";

const ResumeButton = () => {
  const handleDownload = () => {
    const fileUrl = cv;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Ceyhun_Ergun_CV.pdf";
    link.target = "_blank";
    link.click();
  };
  return (
    <div className="resume-btn text-center text-dark d-flex align-items-center justify-content-between">
      <a
        onClick={handleDownload}
        href="/"
        style={{ textDecoration: "none !important", color: "black" }}
      >
        <span className="me-2">Resume</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"
          />
          <path
            fillRule="evenodd"
            d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"
          />
        </svg>
      </a>
    </div>
  );
};

export default ResumeButton;
