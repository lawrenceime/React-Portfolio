import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ marginRight: "2rem", color: "#fff" }} />
            <div>
              <p> Adebayo close , Ago palace way</p>
              <p> Lagos state .</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ marginRight: "2rem", color: "#fff" }}
              />
              +234-808-233-0500
            </h4>
          </div>

          

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ marginRight: "2rem", color: "#fff" }}
              />
              +234-808-233-0500
            </h4>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
