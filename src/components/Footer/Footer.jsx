import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

import "./footer.css";

import { Link } from "react-scroll";

const Footer = () => {
  const phoneNumber = "9022331539";

  // Replace 'Hello!' with your pre-filled message (optional)
  const message = " Hi, Yash";

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="ImageSection my-2">
          <a
            href="https://github.com/16Yash-kadu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare style={{ width: "30px", height: "30px" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/yash-kadu-179a7625b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ width: "30px", height: "30px" }} />
          </a>

          <span onClick={handleWhatsApp}>
            <FaSquareWhatsapp style={{ width: "30px", height: "30px" }} />
          </span>
        </div>
        <div
          style={{
            width: "100%",
            border: "1px solid white",
          }}
        ></div>
      </div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-lg-3">
            <ul
              id="footerMenu"
              className="d-flex justify-content-between"
              style={{ marginLeft: "-30px" }}
            >
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="project" smooth={true} duration={500}>
                  Project
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 text-center "></div>
          <div className="col-lg-3 text-center "></div>

          <div className="col-lg-3 text-center ">
            <p className="" style={{ letterSpacing: "2px" }}>
              {" "}
              Made With ❤️ by Yash Kadu
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Footer;
