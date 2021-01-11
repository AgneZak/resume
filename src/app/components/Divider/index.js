import "./index.css";

function Divider({ isFancy }) {
    return(
        <div className="underline">
        {isFancy && <div className="green-line"></div>}
        <div className="grey-line"></div>
      </div>
    );
}

export default Divider;