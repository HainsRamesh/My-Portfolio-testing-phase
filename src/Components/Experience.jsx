import reactIcon from "../assets/Images/react.png";
import htmlIcon from "../assets/Images/html-5.png";
import cssIcon from "../assets/Images/css-3.png";
import jsIcon from "../assets/Images/js.png";
import reduxIcon from "../assets/Images/redux.png";
import sassIcon from "../assets/Images/sass.png";
import tailwindIcon from "../assets/Images/tailwind.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Experience = () => {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCounter(true);
      }}
      onExit={() => setCounter(false)}
    >
      <section className="experience">
        <div className="section-center">
          <div className="text-container">
            <p className="number">
              {counter && <CountUp end={2} duration={1.5} />}
            </p>
            <p className="text">
              years of <br />
              experience
            </p>
          </div>
          <div className="text-container">
            <p className="number">
              {counter && <CountUp end={12} duration={1.5} />}
            </p>
            <p className="text">
              projects completed
              <br />
              around the world
            </p>
          </div>
          <div className="icons-container">
            <img src={reactIcon} alt="react-icon" className="icon" />
            <img src={htmlIcon} alt="html icon" className="icon" />
            <img src={cssIcon} alt="css icon" className="icon" />
            <img src={jsIcon} alt="js icon" className="icon" />
            <img src={reduxIcon} alt="redux icon" className="icon" />
            <img src={sassIcon} alt="sass icon" className="icon" />
            <img src={tailwindIcon} alt="tailwind icon" className="icon" />
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};
export default Experience;
