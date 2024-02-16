import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import AboutImage1 from "../assets/Ime_Full_Stack.jpeg";
import AboutImage2 from "../assets/tracy-adams-TEemXOpR3cQ-unsplash.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I</h1>
        <p>
          I am a frontend developer , I create rensponsive and secure websites
          for my clients .{" "}
        </p>
        <Link to="/contact" className="btn">
          {" "}
          Contact{" "}
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={AboutImage1} alt="Myself in decagon institute" />
          </div>
          <div className="img-stack bottom">
            <img src={AboutImage2} alt="Random view from unsplash" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
