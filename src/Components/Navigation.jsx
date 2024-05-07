import { useState } from "react";
import { NavLinks } from "../Data";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import logo from "../assets/Images/THE_hains's.png";
import resume from "../assets/Files/resume.pdf";
import { Link } from "react-scroll";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="nav-container">
      <div className="section-container">
        <div className="section-center">
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", margin: "0px" }}
          />

          <div
            className={showLinks ? "burger-icon x-icon" : "burger-icon"}
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </div>
        <ul className={showLinks ? "links-container" : "hide-container"}>
          {NavLinks.map(({ id, name, url }) => {
            return (
              <li className="link" key={id}>
                <Link
                  activeClass="active-nav"
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={-115}
                  duration={500}
                  onClick={() => setShowLinks(false)}
                  className="anchor"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href={resume}
          target="_blank"
          className="resume-btn"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <BsFileEarmarkPdfFill />
          </span>
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
};
export default Navigation;
