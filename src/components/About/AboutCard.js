import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Duong Vu </span>
            from <span className="purple"> Viet Nam.</span>
            <br />
            I am currently employed as a CNC set up and operator at Connectec.
            <br />
            I am currently taking Computer Sciences major at California State University Fullerton.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hang out with my family
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(192 7 7)" }}>
            "Satisfaction lies in effort, not in achievement. Total effort is total victory"{" "}
          </p>
          <footer className="blockquote-footer">Duong</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
