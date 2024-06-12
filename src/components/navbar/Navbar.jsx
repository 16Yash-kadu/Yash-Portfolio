import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { header } from "./header";
import img1 from "../../assets/Vector (1).png";
import img2 from "../../assets/Vector.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <h1 className="mx-4" id="YashHeading">
        {" "}
        Yash Kadu
      </h1>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {header.map((item) => (
          <li key={item.id}>
            <a> {item.name}</a>
          </li>
        ))}
      </ul>

      <div className="icon">
        <img src={img1} alt="linkedIN icon" style={{ height: "27px" }} />
        <img
          src={img2}
          alt="GitHub icon"
          className="px-4"
          style={{ height: "27px" }}
        />
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
