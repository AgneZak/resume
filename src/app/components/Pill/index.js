import "./index.css";

function Pill({ children, color, id }) {
  const assignedColor = ["green", "yellow", "redish"].includes(color)
    ? color
    : "grey";

  return (
      <span id={id} className={`pill ${assignedColor}`}>{children}</span>
  );
}

export default Pill;
