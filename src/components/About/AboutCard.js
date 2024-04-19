import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumadeep Ghosh </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently pursuing B.Tech in Computer Science and Engineering(CSE) At <span className="purple"> Techno International Batanagar.</span>
            <br />
            I am <span className="purple"> Web Developer</span> And <span className="purple"> ML Lover</span> .
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🏏🏏
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography 📸📸
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🌄🌄
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumadeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
