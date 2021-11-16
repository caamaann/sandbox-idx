import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/button";
import ImgSection1 from "../../assets/img/concept2.png";
import ImgSection3 from "../../assets/img/concept3.png";
import ImgSection4 from "../../assets/img/concept5.png";
import TextField from "@mui/material/TextField";
import Partner1 from "../../assets/img/c1.png";
import Partner2 from "../../assets/img/c2.png";
import Partner3 from "../../assets/img/c3.png";
import Partner4 from "../../assets/img/c4.png";
import Partner5 from "../../assets/img/c5.png";
import Partner6 from "../../assets/img/c6.png";

let Index = () => {
  return (
    <div className="home-container">
      <div className="section-1">
        <Container>
          <Row className="align-items-center pt-5">
            <Col lg={7} md={6} sm={12}>
              <img
                src={ImgSection1}
                alt="jumbotron"
                className="section-1-jumbotron"
              />
            </Col>
            <Col lg={5} md={6} sm={12}>
              <div className="big-title">
                Grow Your Business with Our Solutions.
              </div>
              <div className="title">
                We help our clients to increase their website traffic, rankings
                and visibility in search results.
              </div>
              <div className="section-1-btn">
                <Button title="Try it For Free" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-2">
        <Container>
          <div className="section-2-question">WHAT WE DO?</div>
          <div className="section-2-answer">
            The service we offer is specifically
            <br /> designed to meet your needs.
          </div>
          <Row className="section-2-card-list">
            <Col lg={3} md={6} sm={12}>
              <div className="section-2-card">
                <span class="material-icons">search</span>
                <div className="section-2-card-title">SEO Services</div>
                <div className="section-2-card-desc">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus cras justo.
                </div>
                <div className="section-2-card-link orange">Learn More</div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="section-2-card">
                <span class="material-icons">web</span>
                <div className="section-2-card-title">Web Design</div>
                <div className="section-2-card-desc">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus cras justo.
                </div>
                <div className="section-2-card-link pink">Learn More</div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="section-2-card">
                <span class="material-icons">forum</span>
                <div className="section-2-card-title">Social Engagement</div>
                <div className="section-2-card-desc">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus cras justo.
                </div>
                <div className="section-2-card-link green">Learn More</div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="section-2-card">
                <span class="material-icons">campaign</span>
                <div className="section-2-card-title">Content Marketing</div>
                <div className="section-2-card-desc">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget metus cras justo.
                </div>
                <div className="section-2-card-link blue">Learn More</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-3">
        <Container>
          <Row className="align-items-center pt-5">
            <Col lg={5} md={6} sm={12}>
              <div className="section-3-analyze">ANALYZE NOW</div>
              <div className="big-title">
                Wonder how much faster your website can go? Easily check your
                SEO Score now.
              </div>
              <div className="title">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </div>
              <div className="section-3-btn">
                <TextField label="Enter Website URL" variant="outlined" />
                <Button title="Check" />
              </div>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <img
                src={ImgSection3}
                alt="jumbotron"
                className="section-3-jumbotron"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-4">
        <Container>
          <Row className="align-items-center pt-5">
            <Col lg={7} md={6} sm={12}>
              <img
                src={ImgSection4}
                alt="jumbotron"
                className="section-4-jumbotron"
              />
            </Col>
            <Col lg={5} md={6} sm={12}>
              <div className="section-4-talk">LET’S TALK</div>
              <div className="big-title">
                Let's make something great together. We are trusted by over
                5000+ clients.
              </div>
              <div className="title">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus.
              </div>
              <div className="section-4-btn">
                <Button title="Join Us" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={3} sm={4} xs={4}>
              <img src={Partner1} alt="partner-1" className="partner" />
            </Col>
            <Col lg={2} md={3} sm={4} xs={4}>
              <img src={Partner2} alt="partner-2" className="partner" />
            </Col>
            <Col lg={2} md={3} sm={4} xs={4}>
              <img src={Partner3} alt="partner-3" className="partner" />
            </Col>
            <Col lg={2} md={3} sm={4} xs={4}>
              <img src={Partner4} alt="partner-4" className="partner" />
            </Col>
            <Col lg={2} md={3} sm={4} xs={4}>
              <img src={Partner5} alt="partner-5" className="partner" />
            </Col>
            <Col lg={2} md={3} sm={4} xs={4}>
              <img src={Partner6} alt="partner-6" className="partner" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Index;
