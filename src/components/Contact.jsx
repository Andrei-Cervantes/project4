import React from "react";

import "./Contact.css";
import Line from "./UI/Line";

// icons
import phone from "../assets/ContactIcons/Phone.png";
import email from "../assets/ContactIcons/Envelope.png";
import facebook from "../assets/ContactIcons/Facebook.png";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="flex align-items-center">
        <Line header={"contact us"} width="100px" />
      </div>
      <div className="contact-info-container justify-center justify-md-space-between">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.7726093668625!2d121.03100407510746!3d14.668841985825669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6d5c0888283%3A0xde7fa7551eedaa93!2sMetro%20North%20Medical%20Center%20Hospital!5e0!3m2!1sen!2sph!4v1719994078913!5m2!1sen!2sph"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-info">
          <div className="contacts">
            <div className="d-flex flex-row gap-2">
              <img
                src={phone}
                alt="Phone"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "32px",
                  maxHeight: "32px",
                }}
              />
              <div>
                <p>(0917) 875 2044</p>
                <p>(0998) 850 4201</p>
              </div>
            </div>
            <div className="d-flex flex-row gap-2">
              <img
                src={email}
                alt="Email"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "32px",
                  maxHeight: "32px",
                }}
              />
              <p>
                <a
                  className="text-white text-decoration-none"
                  href="mailto:acquireg@myyahoo.com"
                >
                  acquireg@myyahoo.com
                </a>
              </p>
            </div>
            <div className="d-flex flex-row gap-2">
              <img
                src={facebook}
                alt="Facebook"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "32px",
                  maxHeight: "32px",
                }}
              />
              <p>Acquire-G Printing Supply</p>
            </div>
          </div>
          <p className="address-info">
            123 Medical Avenue, Barangay Health Center, Metroville City, Metro
            Manila, Philippines
          </p>
        </div>
      </div>
    </div>
  );
}
