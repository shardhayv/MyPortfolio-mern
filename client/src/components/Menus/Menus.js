import React from "react";
import "./menus.css";
import { FcHome, FcAbout, FcRating } from "react-icons/fc";
import { FaNetworkWired } from "react-icons/fa6";
import { BsHddStackFill } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { GrContact } from "react-icons/gr";
import Profile from "../../assets/images/shardhay-img.png";

const menuItems = [
  { id: 1, icon: <FcHome />, text: "Home", link: "#home" },
  { id: 2, icon: <FcAbout />, text: "About", link: "#about" },
  { id: 3, icon: <FaNetworkWired />, text: "Work Experience", link: "#work" },
  { id: 4, icon: <BsHddStackFill />, text: "Tech Stack", link: "#tech" },
  {
    id: 5,
    icon: <MdOutlineCastForEducation />,
    text: "Education",
    link: "#education",
  },
  { id: 6, icon: <VscProject />, text: "Projects", link: "#projects" },
  { id: 7, icon: <FcRating />, text: "Testimonial", link: "#testimonial" },
  { id: 8, icon: <GrContact />, text: "Contact", link: "#contact" },
];

const Menus = ({ toggle }) => {
  return (
    <>
      {/* Show profile pic only if toggled open (desktop or mobile) */}
      {toggle && (
        <div className="navbar-profile-pic">
          <img src={Profile} alt="Profile Pic" />
        </div>
      )}
      <div className="nav-items">
        <div className="nav-item">
          {menuItems.map(({ id, icon, text, link }) => (
            <a
              key={id}
              href={link}
              className="nav-link"
              title={!toggle ? text : ""}
            >
              {icon} {toggle && text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menus;
