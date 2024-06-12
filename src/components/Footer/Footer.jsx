import "./footer.css";
import img1 from "../../assets/Vector.svg";
import img2 from "../../assets/Vector (1).png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="ImageSection my-2">
          <img src={img1} className="px-2" style={{ height: "27px" }} />
          <img src={img2} className="px-2" style={{ height: "27px" }} />
          <img src={img1} className="px-2" style={{ height: "27px" }} />
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
              className="d-flex justify-content-between"
              style={{ marginLeft: "-30px" }}
            >
              <li>Home</li>
              <li>About</li>
              <li>Skill</li>
              <li>Project</li>
              <li>Contact</li>
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
