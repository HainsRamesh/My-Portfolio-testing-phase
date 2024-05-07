const IconLinks = ({ links }) => {
  return (
    <>
      {links.map(({ link, id, icon }) => {
        return (
          <li key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        );
      })}
    </>
  );
};
export default IconLinks;
