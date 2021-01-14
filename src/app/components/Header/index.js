import Select from "../Select";

function Header ({lang, setLang}) {
    const onSelect = (event) => {
        setLang(event.target.value);
      };

    return (
        <header className="header">
        <div className="navigation">
          <Select
            onChange={onSelect}
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuviu" },
            ]}
          />
        </div>
        <div className="header-name-container">
          <h1>AGNE ZAKAITE</h1>
          <div>PROGRAMMER</div>
        </div>
      </header>
    );
}

export default Header;