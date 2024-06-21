const CustomSocialLinks = ({ links }) => {
  const linkList = links.map(({ link, id, icon, className }) => {
    return (
      <li key={id}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {icon}
        </a>
      </li>
    );
  });

  return <>{linkList}</>;
};
export default CustomSocialLinks;
