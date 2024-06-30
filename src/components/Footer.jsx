import React from 'react';

import './Footer.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-nav">
                <div className="logo"></div>
                <div className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="contacts text-center text-md-start">
                    <div>Eight-P Medical Equipment and Supplies Trading</div>
                    <div>samplesalesemail@gmail.com</div>
                    <div>(0912) 345 6789</div>
                </div>
            </div>
            <div className="footer-copyright d-flex flex-md-row flex-column justify-content-between gap-3">
                <div className="copyright">Copyright &copy; {new Date().getFullYear()} Eight-P Medical Equipment and Supplies Trading. All Rights Reserved.</div>
                <div className="hire-devs">Hire Developers</div>
            </div>
        </div>
    )
}