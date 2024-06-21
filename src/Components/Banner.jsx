import { useEffect, useRef, useState } from "react";
import { socialLinks } from "../Data";
import { particleData } from "../Data";
import ParticleList from "../InnerComponents/ParticleList";
import CustomSocialLinks from "../CustomComponents/CustomSocialLinks";
import bannerImg from "../assets/Images/banner.png";

const particles = particleData.map((particle) => (
  <ParticleList key={particle.id} {...particle} />
));

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
        <ul className="links">
          <CustomSocialLinks links={socialLinks} />
        </ul>
      </div>
      <img src={bannerImg} alt="banner-ai-image" className="banner-img" />
      <div className="particles">{particles}</div>
    </section>
  );
};
export default Banner;
