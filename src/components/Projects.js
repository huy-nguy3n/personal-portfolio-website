import { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import fridayfinder from "../assets/img/friday-finder.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1.",
      image: colorSharp2, // Replace this with the actual image for Project 1
      // Add any other properties you need for Project 1
    },
    {
      title: "Project 2",
      description: "Description of Project 2.",
      image: fridayfinder, // Replace this with the actual image for Project 2
      // Add any other properties you need for Project 2
    },
    // Add more projects as needed
  ];

  // State to manage the visibility and animation of each project card
  const [isVisible, setIsVisible] = useState(Array(projects.length).fill(false));

  // Function to handle the visibility change when a card comes into view
  const handleVisibilityChange = (index, visible) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = visible;
    setIsVisible(updatedVisibility);
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Row>
                {projects.map((project, index) => (
                  <Col key={index} md="12" className="mb-4">
                    <TrackVisibility onChange={(isVisible) => handleVisibilityChange(index, isVisible)}>
                      {({ isVisible: isCardVisible }) => (
                        <Card
                          className={`animate__animated ${isCardVisible ? "animate__fadeIn" : ""}`}
                          style={{ backgroundColor: "#151515" }} // Set your custom color here
                        >
                          <Row>
                            <Col md="4">
                              {/* Increase height and width here */}
                              <Image
                                src={project.image}
                                alt={project.title}
                                fluid
                                style={{ height: "300px", width: "300px" }}
                              />
                            </Col>
                            <Col md="8">
                              <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                {/* Add any other card content or buttons as needed */}
                                <Button variant="primary">Learn More</Button>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      )}
                    </TrackVisibility>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
