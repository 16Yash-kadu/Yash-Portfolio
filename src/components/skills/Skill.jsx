import "./skill.css";

import html from "../../assets/html.png";
import bootstrap from "../../assets/bootstrap.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import tailwind from "../../assets/tailwind.png";
import java from "../../assets/java.png";

const Skill = () => {
  return (
    <div className="skillContainer">
      <h1 className="text-center fw-bold">My Tech Stack</h1>
      <h4 className="text-center " style={{ color: "#A7A7A7" }}>
        {" "}
        Technologies I’ve been working with recently{" "}
      </h4>

      <div className="skillSet">
        <div className="container mt-5 mb-5">
          <div className="row ">
            <div className="col-lg-2 py-4  d-flex justify-content-center ">
              <div className="skillComponent text-center ">
                <img className="my-3" src={html} style={{ height: "80px" }} />

                <h4 className="my-1" style={{ color: "black" }}>
                  HTML
                </h4>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 py-4  d-flex justify-content-center">
              <div className="skillComponent text-center ">
                <img
                  className="my-3"
                  src={bootstrap}
                  style={{ height: "80px" }}
                />

                <h4 className="my-1" style={{ color: "black" }}>
                  Bootstrap
                </h4>
              </div>
            </div>{" "}
            <div className="col-lg-2 col-sm-6 py-4  d-flex justify-content-center">
              <div className="skillComponent text-center ">
                <img
                  className="my-3"
                  src={javascript}
                  style={{ height: "80px" }}
                />

                <h4 className="my-1" style={{ color: "black" }}>
                  Javascript
                </h4>
              </div>
            </div>{" "}
            <div className="col-lg-2 py-4  d-flex justify-content-center">
              <div className="skillComponent text-center ">
                <img className="my-3" src={react} style={{ height: "80px" }} />

                <h4 className="my-1" style={{ color: "black" }}>
                  React
                </h4>
              </div>
            </div>{" "}
            <div className="col-lg-2 py-4  d-flex justify-content-center">
              <div className="skillComponent text-center ">
                <img className="my-3" src={redux} style={{ height: "80px" }} />

                <h4 className="my-1" style={{ color: "black" }}>
                  Redux
                </h4>
              </div>
            </div>
            <div className="col-lg-2 py-4  d-flex justify-content-center">
              <div className="skillComponent text-center ">
                <img
                  className="my-3"
                  src={tailwind}
                  style={{ height: "80px" }}
                />

                <h4 className="my-1" style={{ color: "black" }}>
                  Tailwind
                </h4>
              </div>
            </div>
            <div className="col-lg-2 py-4  d-flex justify-content-center">
              <div className="skillComponent text-center ">
                <img className="my-3" src={java} style={{ height: "80px" }} />

                <h4 className="my-1" style={{ color: "black" }}>
                  Java
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
