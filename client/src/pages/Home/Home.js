import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Shardhay-Vatshyayan-CV.pdf";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="container home-content">
        <h2>Hello 👋, I'm a </h2>
        <h1>
          <Typewriter
            options={{
              strings: [
                "Network Engineer !",
                "MERN Stack Developer !",
                "Cybersecurity Enthusiast !",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="home-buttons">
          <button className="btn btn-hire">Hire me</button>
          <a
            className="btn btn-cv"
            href={Resume}
            download="shardhay_vatshyayan.pdf"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
