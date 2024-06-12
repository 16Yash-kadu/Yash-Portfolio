import "./footer.css";
import img1 from "../../assets/Vector.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="ImageSection my-2">
          <img src={img1} className="px-2" />
          <img src={img1} className="px-2" />
          <img src={img1} className="px-2" />
        </div>
        <div
          style={{
            width: "100%",
            border: "1px solid white",
          }}
        ></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ul className="d-flex justify-content-between">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="col-lg-8 text-end">Designed and built by Yash</div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Footer;
