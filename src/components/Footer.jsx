import React from "react";
import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ marginRight: "2rem", color: "#fff" }} />
            <div>
              <p> Adebayo close , Ago palace way, Lagos state .</p>
           
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
              lawrenceime246@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4> About </h4>
          <p> A seasoned frontend developer with a track record of responsive and industry standard software products . I enjoy crafting and implementing ideas</p>
          <div className="social">
          <FaFacebook
                size={30}
                style={{ marginRight: "1rem", color: "#fff" }}
              />
               <FaTwitter
                size={30}
                style={{ marginRight: "1rem", color: "#fff" }}
              />
               <FaLinkedinIn
                size={30}
                style={{ marginRight: "1rem", color: "#fff" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
