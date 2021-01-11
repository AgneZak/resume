function Select({ options = [] }) {
  return (
    <select className="language-select" id="language">
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
