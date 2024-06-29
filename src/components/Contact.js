import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import losGatosMap from "../assets/img/losGatosMap.png"; // Make sure to add the image to your assets folder

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={4} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Image src={losGatosMap} alt="Los Gatos, California" fluid style={{ borderRadius: "10px" }} />
                  <h5 style={{ marginTop: "10px", color: "white" }}>I'm located in Los Gatos, CA</h5>
                  <h5 style={{ marginTop: "10px", color: "white" }}>Open to Remote and Relocation</h5>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact</h2>
                  <h5>Email: <a href="mailto:duchuyn0411@gmail.com" style={{ color: "white", textDecoration: "none" }}>duchuyn0411@gmail.com</a></h5>
                  <h5>Linkedin: <a href="https://www.linkedin.com/in/huy-nguy3n/" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">linkedin.com/in/huy-nguy3n/</a></h5>
                  <h5>Github: <a href="https://github.com/huy-nguy3n" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">github.com/huy-nguy3n</a></h5>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;
