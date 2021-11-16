import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "../../button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="upper-footer container">
        <div className="upper-footer-title">
          Join our community by using our services and grow your business.
        </div>
        <div className="upper-footer-btn">
          <Button title="Try For Free" />
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <Row>
            <Col lg={3} md={4} sm={12}>
              <div className="title">Sandbox</div>
              <div className="common-text copyright">
                © 2021 Sandbox. All rights reserved.
              </div>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <div className="title-text">Get in Touch</div>
              <div className="common-text address">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </div>
              <div className="title-text email">info@email.com</div>
              <div className="common-text">+00 (123) 456 78 90</div>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <div className="title-text">Learn More</div>
              <div>
                <Link to={"/"} onClick={() => scrollTop()}>
                  About Us
                </Link>
              </div>
              <div>
                <Link to={"/"} onClick={() => scrollTop()}>
                  Our Story
                </Link>
              </div>
              <div>
                <Link to={"/"} onClick={() => scrollTop()}>
                  Projects
                </Link>
              </div>
              <div>
                <Link to={"/"} onClick={() => scrollTop()}>
                  Terms of Use
                </Link>
              </div>
              <div>
                <Link to={"/"} onClick={() => scrollTop()}>
                  Privacy Policy
                </Link>
              </div>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <div className="title-text">Our Newsletter</div>
              <div className="common-text subscribe">
                Subscribe to our newsletter to get our news & deals delivered to
                you.
              </div>
              <div className="footer-btn">
                <TextField label="Email Address" variant="outlined" />
                <Button title="Join" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
