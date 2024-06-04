import { html } from "../../assets/html.png";

const SkillContainer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={html} alt="Image" className="img-fluid" />
            <h2 className="my-3">Image Title</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillContainer;
