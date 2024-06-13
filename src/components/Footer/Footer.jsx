// import { useState } from "react";
import "./footer.css";

import { Link } from "react-scroll";

const Footer = () => {
  const phoneNumber = "9022331539";

  // Replace 'Hello!' with your pre-filled message (optional)
  const message = "Hello!";

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

          <span onClick={handleWhatsApp}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className=" text-black text-3xl hover:scale-125 cursor-pointer mx-1"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>
            </svg>{" "}
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
