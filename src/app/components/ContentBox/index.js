import "./index.css";
import Divider from "../Divider";

function ContentBox({title, children, className = ""}) {
  return (
    <div className={`content-box ${className}`}>
      <h4>{title}</h4>
      <Divider isFancy/>
      {children}
    </div>
  );
}

export default ContentBox;
