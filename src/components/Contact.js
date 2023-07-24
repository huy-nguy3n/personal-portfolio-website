import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 >Contact</h2>
                  <h5>Email: <a href="mailto:duchuyn0411@gmail.com" style={{ color: "white", textDecoration: "none" }}>duchuyn0411@gmail.com</a></h5>
                  <h5>Linkedin: <a href="https://www.linkedin.com/in/huy-nguy3n/" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">linkedin.com/in/huy-nguy3n/</a></h5>
                  <h5>Github: <a href="https://github.com/huy-nguy3n" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">github.com/huy-nguy3n</a></h5>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
