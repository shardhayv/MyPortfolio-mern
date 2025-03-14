import React from "react";
import "./menus.css";
import { FcHome, FcAbout, FcRating } from "react-icons/fc";
import { FaNetworkWired } from "react-icons/fa6";
import { BsHddStackFill } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { GrContact } from "react-icons/gr";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              //   src="https://media.licdn.com/dms/image/v2/D5603AQGqL22ZY8QAaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708253887705?e=1747267200&v=beta&t=r3-seJxkX9HTWTetXnqNXQh_OZI4zSfd8h00BrEBQIs"
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FaNetworkWired />
                Work Experience
              </div>
              <div className="nav-link">
                <BsHddStackFill />
                Tech Stack
              </div>
              <div className="nav-link">
                <MdOutlineCastForEducation />
                Education
              </div>
              <div className="nav-link">
                <VscProject />
                Projects
              </div>
              <div className="nav-link">
                <FcRating />
                Testimonial
              </div>
              <div className="nav-link">
                <GrContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FaNetworkWired title="Experience" />
              </div>
              <div className="nav-link">
                <BsHddStackFill title="Tech Stack" />
              </div>
              <div className="nav-link">
                <MdOutlineCastForEducation title="Education" />
              </div>
              <div className="nav-link">
                <VscProject title="Projects" />
              </div>
              <div className="nav-link">
                <FcRating title="Testimonials" />
              </div>
              <div className="nav-link">
                <GrContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
