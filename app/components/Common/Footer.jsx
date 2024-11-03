// components/Footer.js

"use client";
import React from "react";
import Image from "next/image";
import footerLogo from "../../assets/images/footer-logo.svg";
import instagram from "../../assets/images/icon/instagram.svg";
import facebook from "../../assets/images/icon/facebook.svg";
import twitter from "../../assets/images/icon/twitter.svg";
import github from "../../assets/images/icon/github.svg";
import footerbg from "../../assets/images/footer-bg.png";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerbg.src})` }}>
      <Container fluid>
        <Row>
          <Col md={12} lg={4}>
            <div className="logo-side">
              <a href="#" className="ftr-logo">
                <Image src={footerLogo} alt="logo" width={150} height={50} />{" "}
                {/* Adjust width and height */}
              </a>
              <p>144 North Ocean Ave, Patchogue, NY 11772</p>
              <small>© Check Valet Inc. - All Rights Reserved</small>
              <div className="social-icon">
                <a href="#">
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#">
                  <Image src={facebook} alt="facebook" width={24} height={24} />
                </a>
                <a href="#">
                  <Image src={twitter} alt="twitter" width={24} height={24} />
                </a>
                <a href="#">
                  <Image src={github} alt="github" width={24} height={24} />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={2} xs={"auto"}>
            <h5>Home</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Book Now</a>
              </li>
              <li>
                <a href="#">Safe Home Valet</a>
              </li>
              <li>
                <a href="#">The Experience</a>
              </li>
            </ul>
          </Col>
          <Col lg={2} xs={"auto"}> 
            <h5>Services</h5>
            <ul>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Faq's</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          {/* <Col md={2}>
            <h5>Services1</h5>
            <ul>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Faq's</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Services2</h5>
            <ul>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Faq's</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col> */}
        </Row>

        <div className="get-it-now">
          <h2>Get In The Know</h2>
          <p>
            Join our newsletter and and be the first to hear about all the
            things we have coming your way.
          </p>

          <div className="in-wrap">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>

          <div className="policy">
            <a href="#"> Privacy Policy </a>
            <a href="#">• &nbsp; Terms and Conditions &nbsp; •</a>
            <a href="#"> Sitemap</a>
          </div>

      
        </div>
        <p className="copy-rgt">Copyrights © Check valet.com | All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
