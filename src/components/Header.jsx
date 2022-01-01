import PropTypes from "prop-types";
import {useState} from 'react'

function Header({ text, bgColor, textColor, getData}) {
    const [reverse, setReverse] = useState(false)
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const themChange=()=>{
      setReverse(!reverse);
      getData(!reverse);
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>

      <div>
          <button onClick={themChange} >Change Theme</button>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "THis is a Default Prop",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff96a5",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
