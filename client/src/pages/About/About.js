import React from "react";
import "./about.css";
import Convocation from "../../assets/images/convocation.jpg";

const About = () => {
  return (
    <section className="about container" id="about">
      <div className="row align-items-center">
        <div className="col-md-6 about-img">
          <img
            src={Convocation}
            alt="Convocation Ceremony"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 about-content">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I am passionate about software development,
            networking, and cybersecurity. My journey started with a deep
            interest in Linux, networking protocols, and web technologies. Let's
            build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
