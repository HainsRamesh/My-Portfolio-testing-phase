import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { expIconData } from "../Data";
import ExpIconList from "../InnerComponents/ExpIconList";

const Experience = () => {
  const [counter, setCounter] = useState(false);

  const icons = expIconData.map((icon, index) => (
    <ExpIconList key={icon.id} {...icon} index={index} />
  ));

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

          <div className="icons-container">{icons}</div>
        </div>
      </section>
    </ScrollTrigger>
  );
};
export default Experience;
