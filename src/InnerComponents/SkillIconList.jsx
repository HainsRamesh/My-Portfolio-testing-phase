const skillIconList = ({ img, title }) => {
  return (
    <div className="icon-container">
      <img src={img} alt={title} className="icon" />
    </div>
  );
};
export default skillIconList;
