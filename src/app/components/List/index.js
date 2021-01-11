import "./index.css";

function List ({ liElements = [] }) {
    return (
        <ul>
            {liElements.map((liData, index) => (
                <li key={index} {...liData} />
            ))}
        </ul>
    );

}

export default List;