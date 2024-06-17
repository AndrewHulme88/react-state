import React, {useState} from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Button() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div className="Button" style={{backgroundColor}}>
      {COLORS.map((color) => (
        <button type="button" key={color} onClick={onButtonClick(color)} className={backgroundColor === color ? "selected" : ""}>
          {color}
        </button>
      ))}
    </div>
  );
}

export default Button;
