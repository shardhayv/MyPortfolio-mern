import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Menus from "../Menus/Menus";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./layout.css";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="layout-container">
      {/* Hamburger Button (always visible) */}
      <button className="sidebar-toggle-btn" onClick={handleToggle}>
        {toggle ? (
          <AiOutlineDoubleLeft size={24} />
        ) : (
          <AiOutlineDoubleRight size={24} />
        )}
      </button>

      {/* Overlay (darkens the main content when sidebar is open) */}
      {toggle && <div className="overlay" onClick={() => setToggle(false)} />}

      {/* Sidebar (slides in/out) */}
      <div className={`sidebar ${toggle ? "expanded" : "collapsed"}`}>
        <Menus toggle={toggle} />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* For demo: rendering Home + About; in a real app, you might use React Router */}
        <Home />
      </div>
    </div>
  );
};

export default Layout;
