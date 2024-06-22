import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center justify-content-center">
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
