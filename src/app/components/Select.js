function Select({ options = [], onChange }) {
  
  return (
    <select className="language-select" id="language" onChange = {onChange}>
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
