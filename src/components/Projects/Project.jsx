import "./project.css";
import img1 from "../../assets/Rectangle.png";
import img2 from "../../assets/Group.png";

const Project = () => {
  return (
    <div id="project" className="projectContainer mb-4">
      <h1 className="text-center fw-bold">Projects</h1>
      <h4 className="text-center" style={{ color: "#A7A7A7" }}>
        Things I’ve built so far
      </h4>

      <div className="container ">
        <div className="row mt-5">
          <div className="col-lg-4 mb-3">
            {" "}
            <img src={img1} id="projectImage" />
            <div id="projectBox" className="py-3">
              <h2 className="text-center py-2">Project Title</h2>
              <p className="px-4 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                iure deserunt asperiores molestias voluptatem dignissimos
                voluptatibus! Harum quidem quod, tempore porro officiis
                exercitationem quasi deleniti id architecto iure provident
                nihil.
              </p>

              <p className="px-4">
                <span>Tech Stack :</span> Html, Css, Javascript
              </p>

              <div className="my-2 px-4 d-flex ">
                <img src={img2} style={{ height: "18px" }} />
                <h6 className="mx-2"> Paste link here </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            {" "}
            <img src={img1} id="projectImage" />
            <div id="projectBox" className="py-3">
              <h2 className="text-center py-2">Project Title</h2>
              <p className="px-4 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                iure deserunt asperiores molestias voluptatem dignissimos
                voluptatibus! Harum quidem quod, tempore porro officiis
                exercitationem quasi deleniti id architecto iure provident
                nihil.
              </p>

              <p className="px-4">
                <span>Tech Stack :</span> Html, Css, Javascript
              </p>

              <div className="my-2 px-4 d-flex ">
                <img src={img2} style={{ height: "18px" }} />
                <h6 className="mx-2"> Paste link here </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            {" "}
            <img src={img1} id="projectImage" />
            <div id="projectBox" className="py-3">
              <h2 className="text-center py-2">Project Title</h2>
              <p className="px-4 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                iure deserunt asperiores molestias voluptatem dignissimos
                voluptatibus! Harum quidem quod, tempore porro officiis
                exercitationem quasi deleniti id architecto iure provident
                nihil.
              </p>

              <p className="px-4">
                <span>Tech Stack :</span> Html, Css, Javascript
              </p>

              <div className="my-2 px-4 d-flex ">
                <img src={img2} style={{ height: "18px" }} />
                <h6 className="mx-2"> Paste link here </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
