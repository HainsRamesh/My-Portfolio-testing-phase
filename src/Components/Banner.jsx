import { socialLinks } from "../Data";
import bannerImg from "../assets/Images/banner.png";
import particleOne from "../assets/Images/particle1.png";
import particleTwo from "../assets/Images/particle2.png";
import shapeOne from "../assets/Images/shape1.png";
import shapeTwo from "../assets/Images/shape2.png";
import IconLinks from "../CustomComponents/IconLinks";

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="section-center">
        <p className="bold-text">Hello 👋,</p>
        <h1>
          I'm a web
          <br />
          Developer
        </h1>
        <p>I build things for web</p>
        <ul className="links social-links">
          <IconLinks links={socialLinks} />
        </ul>
      </div>
      <img src={bannerImg} alt="banner-ai-image" className="banner-img" />

      <div className="particles">
        <img
          rel="preload"
          className="particle particle-1"
          src={particleOne}
          alt="particle"
        />
        <img
          rel="preload"
          className="particle particle-2"
          src={particleTwo}
          alt="Particle"
        />
        <img src={shapeOne} alt="shape" className="shape shapeOne" />
        <img src={shapeTwo} alt="shape" className="shape shapeTwo" />
      </div>
    </section>
  );
};
export default Banner;
