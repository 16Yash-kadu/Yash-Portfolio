import "./hero.css";
import yashimg from "../../assets/yash.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container ">
        <div className="row ">
          <div className="col-lg-8 col-sm-6">
            <div className="leftContent">
              <h1 className="mt-4 mb-3 " id="heroTitle">
                Hello, I'm Yash Kadu
              </h1>
              <h2 className="mt-3 mb-3 " id="AnimatedHeading">
                Front End Developer{" "}
              </h2>
              <p className=" mt-2 mb-4 fs-5" id="heroParagraph">
                I focus on developing user-friendly web applications that meet
                the client's requirements, with attention to detail,
                scalability, and performance.
              </p>
              <div>
                <button className="btn mx-2">Hire Me</button>
                <button className="btn mx-2"> Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 ">
            <img src={yashimg} className="rigthImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
