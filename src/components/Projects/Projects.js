import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import qline from "../../Assets/Projects/q-line.png";
import sound from "../../Assets/Projects/Sound.png";
import music from "../../Assets/Projects/music.png";
import Lil from "../../Assets/Projects/LittleExp.png";
import meals from "../../Assets/Projects/meals.png";
import travel from "../../Assets/Projects/tour.png";

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
              imgPath={qline}
              isBlog={false}
              title="Q-Line"
              description="A track company website built using React.js can provide a dynamic and interactive platform for customers to track their deliveries and shipments. It have a user-friendly interface, allowing customers to easily check the status of their deliveries and receive real-time updates."
              ghLink="https://github.com/MoldirShabikova/"
              demoLink="https://q-line.us/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sound}
              isBlog={false}
              title="Sound"
              description="An e-commerce website built using React.js, Node.js, and Express which provides a platform for users to sell their products online. With a user-friendly interface, users can easily create and manage their own online store, showcasing their products and reaching a wider audience. In addition, the website also offer features such as product categorization, search and filtering, and the ability for customers to leave reviews and ratings for products."
              ghLink="https://github.com/MoldirShabikova/Sound"
              demoLink="https://sound-2021.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Lyriks"
              description=" Improved version of Spotify with a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more, this is the best music application. Created with JavaScript, React, Redux, Redux Toolkit, Tailwind.css"
              ghLink="https://github.com/MoldirShabikova/Lyrics-music-app"
              demoLink="https://music-lyriks-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lil}
              isBlog={false}
              title="Little Explorer"
              description="More than just event listings: For parents who love to seek out the coolest, off-the-beaten-track things to do with kids,Little Explorer shares activities that aren't just pleasant time passers, but promise enriching experiences for your family. Application created using Ruby on Rails, React, Cors, Bcrypt, Axios, AWS."
              ghLink="https://github.com/MoldirShabikova/LittleExplorer"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel App"
              description="A fully responsive full stack travel website using React.js, Node.js, and SQL. It offers features such as flight and hotel booking, destination information, and user accounts management for an optimal user experience on any device."
              ghLink="https://github.com/MoldirShabikova/travel-capstone-dev"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meals}
              isBlog={false}
              title="Find Recipe"
              description="A recipe app built using JavaScript can provide users with a platform to search, save, and organize their favorite recipes. It can have a user-friendly interface, allowing users to easily browse and search for recipes by ingredients, cuisine, or meal type."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://moldirshabikova.github.io/Find-Meals-For-Your-Ingredients/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
