const CustomButton = ({ name, link, className, icon }) => {
  return (
    <a className={className} href={link} target="_blank">
      {name} {icon}
    </a>
  );
};
export default CustomButton;
