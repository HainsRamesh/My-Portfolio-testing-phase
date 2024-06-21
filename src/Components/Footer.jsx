import { useState } from "react";
import CustomSocialLinks from "../CustomComponents/CustomSocialLinks";
import { Link } from "react-scroll";
import { footerLinks } from "../Data";
import { BsRocketFill } from "react-icons/bs";

const Footer = () => {
  const [showText, setShowText] = useState(false);

  const mouseEnterHandler = () => {
    setShowText(true);
  };

  const mouseLeaveHandler = () => {
    setShowText(false);
  };

  return (
    <section className="footer">
      <ul className="links">
        <CustomSocialLinks links={footerLinks} />
      </ul>

      <Link
        activeClass="active-nav"
        to="banner"
        spy={true}
        smooth={true}
        duration={500}
        className="anchor"
      >
        <BsRocketFill
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="rocket"
        />
      </Link>

      <p className={showText ? "text show-text" : "text"}>Beam me up, Hains!</p>
      <p className="copyrights">
        Built by Hains with
        <span className="highlight"> love</span> &
        <span className="highlight"> coffee</span>
      </p>
    </section>
  );
};
export default Footer;
