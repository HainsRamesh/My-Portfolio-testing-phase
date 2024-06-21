import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { NavData } from "../Data";
import NavLinkList from "../InnerComponents/NavLinkList";
import logo from "../assets/Images/logo.png";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [height, setHeight] = useState(0);
  const refContainer = useRef(null);

  useEffect(() => {
    if (refContainer.current) {
      setHeight(refContainer.current.offsetHeight);
    }
  }, []);

  const listItems = NavData.map((nav) => (
    <NavLinkList
      key={nav.id}
      {...nav}
      setShowLinks={setShowLinks}
      height={height}
    />
  ));

  return (
    <nav className="nav-container" ref={refContainer}>
      <div className="section-container">
        <div className="section-center">
          <Link
            activeClass="active-nav"
            to="banner"
            spy={true}
            smooth={true}
            duration={100}
            className="anchor"
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="logo" className="logo" />
          </Link>
          {/* Burger Icon for toggling navigation links */}
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

        {/* Navigation Links */}
        <ul className={showLinks ? "links-container" : "hide-container"}>
          {listItems}
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
