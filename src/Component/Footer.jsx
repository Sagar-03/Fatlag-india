import React from "react";
import dseulogo from "../assets/dseulogofullnew.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-column left">
          <img src={dseulogo} alt="DSEU Logo" className="footer-logo" />
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            G/Floor, Delhi Skill and Entrepreneurship University,<br />
            Sector-9, Dwarka, New Delhi- 110077
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> 011-2659-7135<br />
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> helpdesk@dseu.ac.in<br />
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <a href="https://www.dseu.ac.in"> www.dseu.ac.in</a>
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
            </a>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
            </a>
          </div>
        </div>

        <div className="footer-column middle">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Departments</a></li>
            <li><a href="#">Centres & CoEs</a></li>
            <li><a href="#">Schools</a></li>
            <li><a href="#">Anti-Sexual Harassment Policy</a></li>
            <li><a href="#">Right to Information</a></li>
            <li><a href="#">Office of Career Services</a></li>
            <li><a href="#">Switch to Dark Mode</a></li>
          </ul>
        </div>

        <div className="footer-column right">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Rules</a></li>
            <li><a href="#">Campus Life</a></li>
            <li><a href="#">Institute Newsletter</a></li>
            <li><a href="#">Educational Programmes</a></li>
            <li><a href="#">PhD Seminar</a></li>
            <li><a href="#">Climate Action Plan</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
