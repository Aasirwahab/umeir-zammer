import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-col">
          <div className="footer-item">
            <a href="#">Self-Improvement</a>
          </div>
          <div className="footer-item">
            <a href="#">Motivation</a>
          </div>
          <div className="footer-item">
            <a href="#">Comedy</a>
          </div>
          <div className="footer-item">
            <a href="#">Podcast</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-item">
            <a href="#">Twitter</a>
          </div>
          <div className="footer-item">
            <a href="#">TikTok</a>
          </div>
          <div className="footer-item">
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
