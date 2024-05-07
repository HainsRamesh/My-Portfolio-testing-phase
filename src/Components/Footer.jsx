import logo from "../assets/Images/THE_hains's.png";
import IconLinks from "../CustomComponents/IconLinks";
import { footerLinks } from "../Data";
const Footer = () => {
  return (
    <section className="footer">
      <img src={logo} alt="company logo" className="logo" />
      <p>
        Built by <span className="name">Hains</span> with{" "}
        <span className="love">Love</span> &{" "}
        <span className="coffee">Coffee</span>
      </p>
      <ul className="links footer-links">
        <IconLinks links={footerLinks} />
      </ul>
    </section>
  );
};
export default Footer;
