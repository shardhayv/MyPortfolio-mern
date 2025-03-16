import React, { useState } from "react";
import Home from "./../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./layout.css";
import Menus from "./../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Toggle Sidebar
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="sidebar-section">
      <div className={`sidebar ${toggle ? "expanded" : "collapsed"}`}>
        <button className="sidebar-toggle-btn" onClick={handleToggle}>
          {toggle ? (
            <AiOutlineDoubleLeft size={30} />
          ) : (
            <AiOutlineDoubleRight size={30} />
          )}
        </button>
        <Menus toggle={toggle} />
      </div>

      <div className="main-content">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
