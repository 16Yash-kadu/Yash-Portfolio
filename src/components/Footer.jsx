import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>ParatWada Amravati</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              9022331539
            </h4>
          </div>

          <div className="phone">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              yashkadu165@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company </h4>
          <p>
            This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, iure? Iste, atque!
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaTelegram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
          </div>
        </div>
        .yash*3
      </div>
    </div>
  );
};

export default Footer;
