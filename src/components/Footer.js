import React from "react";
import "./Footer.css";
import { FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="social-menu">
                      <ul>
                        <li>
                          <a
                            href="https://github.com/chirayupatel9"
                            target="blank">
                            <i class="fab fa-github">
                              <FaGithub />
                            </i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/chiiirayu/"
                            target="blank"
                          >
                            <i class="fab fa-instagram">
                                <FaInstagram/>
                            </i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/chiiirayu/"
                            target="blank"
                          >
                            <i class="fab fa-linkedin-in">
                                <FaLinkedin/>
                            </i>
                          </a>
                        </li>
                        
                      </ul>
                    </div>
      </footer>
    </div>
  );
}

export default Footer;
