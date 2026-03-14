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
            <a href="https://www.tiktok.com/@umairzameer_20?_r=1&_t=ZS-94g1CQmg0Cu" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
          <div className="footer-item">
            <a href="https://www.instagram.com/umairzameer20?igsh=bG4ydzNob3Joajlh" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
