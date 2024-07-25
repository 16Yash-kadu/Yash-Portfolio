import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [menu, setMenu] = useState("home");

  const handleClick = () => {
    setClick(!click);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setClick(false); // Close the menu if it's open
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div id="home" className={color ? "header header-bg" : "header"}>
      <h1 className="mx-4" id="YashHeading">
        Yash Kadu
      </h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("home")}
          >
            Home
            <div className={menu === "home" ? "underlineHeader" : ""}></div>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("about")}
          >
            About
            <div className={menu === "about" ? "underlineHeader" : ""}></div>
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("skills")}
          >
            Skills
            <div className={menu === "skills" ? "underlineHeader" : ""}></div>
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("project")}
          >
            Project
            <div className={menu === "project" ? "underlineHeader" : ""}></div>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("contact")}
          >
            Contact
            <div className={menu === "contact" ? "underlineHeader" : ""}></div>
          </Link>
        </li>
      </ul>

      <div className="icon" style={{ marginTop: "-5px" }}>
        <a
          href="https://www.linkedin.com/in/yash-kadu-179a7625b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaLinkedin style={{ width: "30px", height: "30px" }} />
        </a>
        <a
          href="https://github.com/16Yash-kadu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare style={{ width: "30px", height: "30px" }} />
        </a>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
