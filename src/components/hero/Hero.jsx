import "./hero.css";
import Tech from "../../assets/TechImg.png";
import Headline from "./Headline";
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownload = () => {
    // Replace 'path_to_your_resume.pdf' with the actual path to your resume
    const resumePath = "../../assets/Yash_Kadu_Front End Developer.pdf";

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Yash_Kadu_Front End Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero">
      <div className="container ">
        <div className="row ">
          <div className="col-lg-7 col-sm-6">
            <div className="leftContent">
              <h1 className="mt-4 mb-3 " id="heroTitle">
                Hello, I'm Yash Kadu
              </h1>
              <h2 className="mt-3 mb-3 " id="AnimatedHeading">
                <Headline />
              </h2>
              <p className=" mt-2 mb-4 fs-5" id="heroParagraph">
                I focus on developing user-friendly web applications that meet
                the client's requirements, with attention to detail,
                scalability, and performance.
              </p>
              <div>
                <a
                  href="https://www.linkedin.com/in/yash-kadu-179a7625b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="btn mx-2">Hire Me</button>
                </a>
                <button className="btn mx-2" onClick={handleDownload}>
                  {" "}
                  Resume
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-6 ">
            <motion.img
              src={Tech}
              alt="Placeholder"
              className="rigthImage"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
