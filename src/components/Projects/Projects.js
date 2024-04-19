import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import voice_assistant from "../../Assets/Projects/Jarvis.png";
import crepl from "../../Assets/Projects/CREPL.png";
import bagisto from "../../Assets/Projects/Ecom.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Portfolio from "../../Assets/Projects/PORTFOLIO.png";

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
              imgPath={voice_assistant}
              isBlog={false}
              title="JARVIS"
              description="Meet JARVIS 🤖 , it's my Python-based voice assistant integrated with OpenCV for advanced computer vision capabilities. It combines natural language processing and gesture recognition for seamless interaction, enabling users to control devices and fetch information effortlessly. "
              ghLink="https://github.com/SoumadeepGhosh/Jarvis"
                           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio - Website"
              description="Meet, my React-powered portfolio website, designed for seamless navigation and showcasing my projects. With a minimalist interface. This website epitomizes my commitment to excellence and innovation in software development.."
              ghLink="https://github.com/SoumadeepGhosh/Portfolio"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bagisto}
              isBlog={false}
              title="Bagisto-Ecomm."
              description="My Laravel eCommerce website offers a seamless online shopping experience with its sleek design and robust functionality. Built on the Laravel framework, it ensures security and scalability while providing features like product catalog management and secure payment processing."
              ghLink="https://github.com/SoumadeepGhosh/Ecommerce"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crepl}
              isBlog={false}
              title="CREPL"
              description="CREPL is our group's real-time C interpreter, offering instant feedback and support for coding and testing. With a user-friendly interface and robust backend, it aids developers in writing, compiling, and executing C code efficiently, showcasing our dedication to software engineering excellence. "
              ghLink="https://github.com/SoumadeepGhosh/crepl"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My-Blog"
              description="Upcomming . ."
              ghLink=""
              demoLink=""
            />
          </Col>

          

          
{/* 
           */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
