import "./index.css";

function Link({ link, imgSrc = "", imgAlt = "", children }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {imgSrc && <img src={imgSrc} alt={imgAlt}></img>}
      {children}
    </a>
  );
}

export default Link;
