import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Moldir Shabikova </span>
            from <span className="purple"> Astana, Kazakhstan.</span>
            <br />I am frontend developer and full time mom =)
      
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
