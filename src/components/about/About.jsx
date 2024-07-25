import "./about.css";

const About = () => {
  return (
    <div id="about" className="aboutContainer ">
      <h1 className="fw-bold text-center">About Me </h1>

      <div className="container">
        <p className="fs-4 mt-5">
          Hi, my name is Yash Kadu, I am a front-end developer who loves making
          websites look great and work well. I use HTML, CSS, JavaScript, and
          tools like React and Bootstrap to build sites that are easy to use on
          any device. My goal is to create websites that people enjoy using and
          that meet all your needs.
        </p>

        <div className="row">
          <div className="col-lg-2">
            {" "}
            <h1
              className="fw-bold text-center"
              id="onePlus"
              style={{ fontSize: "88px" }}
            >
              1 +
            </h1>
          </div>
          <div className="col-lg-10">
            <p className="fs-4 mt-3">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card-wrapper">
              <div className="left">
                <div className="relative">
                  <div className="design">
                    <div className="c1"></div>
                    <div className="line"></div>
                    <div className="c2"></div>
                  </div>
                  <div className="content-box">
                    <h1 className="title">Front End Developer</h1>
                    <span className="company">
                      Praman Proserv Technologies Pvt Ltd
                    </span>
                    <span className="duration">Oct 2023 - July 2024</span>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur repudiandae, animi eaque sapiente consequatur
                      cupiditate aut qui nisi iste iure excepturi reiciendis
                      vero velit debitis distinctio veritatis quisquam
                      temporibus. Repellendus atque ipsam cumque dolorem facere
                      maxime magnam, saepe veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {" "}
            <div className="card-wrapper">
              <div className="left">
                <div className="relative">
                  <div className="design">
                    <div className="c1"></div>
                    <div className="line"></div>
                    <div className="c2"></div>
                  </div>
                  <div className="content-box">
                    <h1 className="title">Java Developer</h1>
                    <span className="company">MindScript Tech</span>
                    <span className="duration">6 Months Course</span>
                    <p className="description">
                      I have completed an intensive Java Developer Course,
                      mastering a comprehensive skill set that spans both
                      front-end and back-end technologies. Good in core Java and
                      , I also excel in JavaScript for dynamic web applications
                      and SQL for efficient database management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {" "}
            <div className="card-wrapper">
              <div className="left">
                <div className="relative">
                  <div className="design">
                    <div className="c1"></div>
                    <div className="line"></div>
                    <div className="c2"></div>
                  </div>
                  <div className="content-box">
                    <h1 className="title">B.Sc Computer Science</h1>
                    <span className="company">Gvish Amravati</span>
                    <span className="duration">Year 2019 - Year 2022</span>
                    <p className="description">
                      As an graduate Student in B.Sc Computer Science provided
                      me with a good understanding in development technologies,
                      including HTML, CSS, Javascript , Bootstrap and SQL. This
                      diverse skill set equips me to excel in a wide range of
                      software development projects and adapt to evolving
                      industry needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
