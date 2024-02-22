import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import OrderedAssociativeContainers from "../../Assets/Projects/Ordered.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OrderedAssociativeContainers}
              isBlog={false}
              title="Ordered-Associative-Containers"
              description="You'll enhance a GroceryStore Inventory project by handling a store's inventory updates as customers check out. As groceries are scanned, the inventory is updated by reducing the available quantity for each item. Your task includes reordering items that are low in stock at the end of the day."
              ghLink="https://github.com/amao4t/Ordered-Associative-Containers"
              demoLink=" "

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
