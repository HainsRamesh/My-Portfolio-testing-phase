import { Link } from "react-scroll";

const NavLinkList = ({ url, name, height, setShowLinks }) => {
  return (
    <li className="link">
      <Link
        activeClass="active-nav"
        to={url}
        spy={true}
        smooth={true}
        offset={-height}
        duration={100}
        onClick={() => setShowLinks(false)}
        className="anchor"
      >
        {name}
      </Link>
    </li>
  );
};
export default NavLinkList;
