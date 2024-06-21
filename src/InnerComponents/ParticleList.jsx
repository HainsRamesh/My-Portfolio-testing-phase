const ParticleList = ({ id, className, src, alt }) => {
  return (
    <img key={id} rel="preload" className={className} src={src} alt={alt} />
  );
};
export default ParticleList;
