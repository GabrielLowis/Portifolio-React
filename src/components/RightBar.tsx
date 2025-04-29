import { FaReact } from "react-icons/fa";
import "../styles/components/rightBar.css";
import { useState } from "react";

const RightBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="right-bar">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={`icon-right-bar ${selectedIndex === index ? "icon-checked" : ""}`}
          onClick={() => handleClick(index)}
        >
          <FaReact />
        </div>
      ))}
    </div>
  );
};

export default RightBar;
