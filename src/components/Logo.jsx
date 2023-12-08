/* eslint-disable react/prop-types */

const Logo = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} width={80} height={80} />
    </div>
  );
};

export default Logo;
