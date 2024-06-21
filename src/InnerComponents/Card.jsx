import { memo } from "react";
import { FaSearchPlus } from "react-icons/fa";

const Card = (project) => {
  const { id, img, title, handleClick } = project;

  return (
    <div className="card" key={id} onClick={() => handleClick(project)}>
      <div className="search-icon">
        <FaSearchPlus className="search-icon" />
      </div>
      <button className="title-btn">{title}</button>
      <img src={img} alt={title} className="card-img" />
    </div>
  );
};
export default memo(Card);
