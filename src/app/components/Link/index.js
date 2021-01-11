import "./index.css";

function Link({ image, link, imgSrc = "", imgAlt = "", children }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {image && <img src={imgSrc} alt={imgAlt}></img>}
      {children}
    </a>
  );
}

export default Link;
