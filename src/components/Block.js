import React, { useState } from "react";

function Block({ marker, index, toggle, size, next }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      type="button"
      className="block"
      style={{
        width: 100 / size + "%",
        height: 100 / size + "%"
      }}
      onClick={() => {
        toggle(index);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <span className={`text ${marker === undefined && isHover && "hover"}`}>
        {marker === undefined
          ? (isHover && (next ? "O" : "X")) || ""
          : marker !== undefined && (marker ? "O" : "X")}
      </span>
    </button>
  );
}

export default Block;
