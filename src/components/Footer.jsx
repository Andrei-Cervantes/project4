import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-nav">
        <div className="logo"></div>
        <div className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="contacts text-center text-md-start">
          <div>Eight-P Medical Equipment and Supplies Trading</div>
          <div>
            <a
              className="text-white text-decoration-none"
              href="mailto:acquireg@myyahoo.com"
            >
              acquireg@myyahoo.com
            </a>
          </div>
          <div>(0917) 875 2044</div>
          <div>(0998) 850 4201</div>
        </div>
      </div>
      <div className="footer-copyright d-flex flex-md-row flex-column justify-content-between gap-3">
        <div className="copyright">
          Copyright &copy; {new Date().getFullYear()} Eight-P Medical Equipment
          and Supplies Trading. All Rights Reserved.
        </div>
        <div className="hire-devs">Hire Developers</div>
      </div>
    </div>
  );
}
