export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  console.log(className);
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};
