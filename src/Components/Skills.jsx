import { skillIconData } from "../Data";
import SkillIconList from "../InnerComponents/SkillIconList";

const skill = skillIconData.map((skill) => (
  <SkillIconList key={skill.id} {...skill} />
));

const Skills = () => {
  return (
    <section className="skills">
      <div className="section-center">
        <div className="content-section">
          <h2 className="heading-two">My Skills</h2>

          <p className="paragraph">
            Technologies I'v been working with recently
          </p>

          <div className="image-container">{skill}</div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
