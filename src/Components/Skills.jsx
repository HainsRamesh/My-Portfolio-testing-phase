import reactIcon from "../assets/Images/react.png";
import htmlIcon from "../assets/Images/html-5.png";
import cssIcon from "../assets/Images/css-3.png";
import jsIcon from "../assets/Images/js.png";
import reduxIcon from "../assets/Images/redux.png";
import sassIcon from "../assets/Images/sass.png";
import tailwindIcon from "../assets/Images/tailwind.png";
import githubIcon from "../assets/Images/github.png";
import npmIcon from "../assets/Images/npm.png";
import bootstrapIcon from "../assets/Images/bootstrap.png";

const Skills = () => {
  return (
    <section className="skills">
      <div className="section-center">
        <div></div>
        <div className="content-section">
          <h2>My Skills</h2>
          <p>Technologies I'v been working with recently</p>
          <div className="image-container">
            <div className="icon-container">
              <img
                src={reactIcon}
                alt="react-icon"
                className="icon"
                width="50px"
              />
            </div>
            <div className="icon-container">
              <img
                src={htmlIcon}
                alt="html icon"
                className="icon"
                width="50px"
              />
            </div>
            <div className="icon-container">
              <img src={cssIcon} alt="css icon" className="icon" width="50px" />
            </div>
            <div className="icon-container">
              <img src={jsIcon} alt="js icon" className="icon" width="50px" />
            </div>
            <div className="icon-container">
              <img
                src={reduxIcon}
                alt="redux icon"
                className="icon"
                width="50px"
              />
            </div>
            <div className="icon-container">
              <img
                src={sassIcon}
                alt="sass icon"
                className="icon"
                width="50px"
              />
            </div>
            <div className="icon-container">
              <img
                src={tailwindIcon}
                alt="tailwind icon"
                className="icon"
                width="50px"
              />
            </div>
            <div className="icon-container">
              <img
                src={bootstrapIcon}
                alt="bootstrap icon"
                className="icon"
                width="50px"
              />
            </div>
            <div className="icon-container">
              <img
                src={githubIcon}
                alt="github icon"
                className="icon"
                width="50px"
              />
            </div>
            <div className="icon-container">
              <img src={npmIcon} alt="npm icon" className="icon" width="50px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
