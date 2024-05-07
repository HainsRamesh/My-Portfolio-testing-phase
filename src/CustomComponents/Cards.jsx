import CustomButton from "./CustomButton";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const Cards = ({ id, img, title, description, gitLink, liveSite }) => {
  return (
    <div className="card" key={id}>
      <img src={img} alt={title} className="card-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="button-container">
        <CustomButton
          name="View Code"
          icon={<FaGithub />}
          link={gitLink}
          className="card-button"
        />
        <CustomButton
          name="Live Site"
          link={liveSite}
          icon={<HiExternalLink />}
          className="card-button"
        />
      </div>
    </div>
  );
};
export default Cards;
