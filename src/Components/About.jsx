import myImg from "../assets/Images/myImg.jpeg";
import { FaRegKeyboard } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsImageLoaded(true);
    };
    img.src = myImg;
  }, [myImg]);

  return (
    <section id="about" className="about">
      <div className="section-center flex-center">
        <h2 className="heading-two">a little bit about me</h2>
        <div className="blur-hash-container flex-center">
          {!isImageLoaded && (
            <div className="blur-hash-loader">
              <Blurhash
                hash="L9J7wG?K00.8019[D%-o008w_NRj"
                width={400}
                height={400}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            </div>
          )}
          <img
            src={myImg}
            alt="Hains Image"
            className="my-pic"
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
        </div>

        <p className="paragraph">
          As a front-end developer, I'm passionate about creating dynamic and
          user-friendly websites and applications. I specialize in crafting
          seamless user experiences and take pride in staying on top of the
          latest industry trends and technologies. I'm a continuous learner,
          always looking for ways to improve my skills and deliver high-quality
          solutions that not only meet but exceed client expectations.
        </p>

        <p className="paragraph">
          When I'm not coding, I find balance through activities like listening
          to music, hitting the gym, and enjoying movies and web series.
        </p>

        <div className="about-box">
          <h3>self proclamations:</h3>
          <div className="proclaim-items">
            <div className="proclaim flex-center">
              <FaRegKeyboard className="icon flex-center" />
              <p className="text">Web Developer</p>
            </div>

            <div className="proclaim flex-center">
              <MdWeb className="icon flex-center" />
              <p className="text">UX Enthusiast</p>
            </div>

            <div className="proclaim flex-center">
              <IoGameController className="icon flex-center" />
              <p className="text">Gamer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
