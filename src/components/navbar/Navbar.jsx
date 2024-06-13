import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-black text-3xl hover:scale-125 cursor-pointer mx-1"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M20.388 3H3.613C2.555 3 2 3.55 2 4.263v15.476C2 20.448 2.555 21 3.613 21h16.775c1.058 0 1.612-.552 1.612-1.261V4.263c0-.712-.554-1.263-1.612-1.263zm-11.1 14.073H6.452V9.71h2.836v7.363h-.001zm-1.42-8.13a1.837 1.837 0 1 1 0-3.673 1.837 1.837 0 0 1 0 3.673zm9.656 8.13h-2.835v-4.88c0-1.16-.421-1.95-1.47-1.95-.804 0-1.283.54-1.495 1.067-.08.196-.1.468-.1.743v5.02h-2.837s.037-7.573 0-8.363h2.837v1.183c.377-.577 1.049-1.4 2.556-1.4 1.868 0 3.269 1.23 3.269 3.882v5.698z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/16Yash-kadu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-black text-3xl hover:scale-125 cursor-pointer mx-1"
            height="1.7em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12 .297C5.405.297 0 5.702 0 12.297c0 5.384 3.493 9.93 8.35 11.541.611.113.834-.267.834-.593 0-.293-.012-1.067-.019-2.091-3.387.73-4.104-1.697-4.104-1.697-.554-1.403-1.354-1.777-1.354-1.777-1.107-.754.084-.739.084-.739 1.223.086 1.865 1.226 1.865 1.226 1.085 1.865 2.845 1.328 3.536 1.012.111-.788.426-1.328.773-1.633-2.7-.307-5.546-1.354-5.546-6.027 0-1.331.477-2.421 1.261-3.268-.126-.306-.546-1.55.119-3.233 0 0 1.025-.328 3.35 1.25 1.025-.284 2.126-.426 3.225-.43 1.1.004 2.2.146 3.225.43 2.325-1.578 3.348-1.25 3.348-1.25.667 1.683.246 2.927.121 3.233.786.847 1.259 1.937 1.259 3.268 0 4.688-2.851 5.716-5.559 6.019.437.378.824 1.116.824 2.249 0 1.624-.014 2.934-.014 3.336 0 .328.22.712.842.59C20.513 22.222 24 17.676 24 12.297 24 5.702 18.595.297 12 .297z"
            />
          </svg>
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
