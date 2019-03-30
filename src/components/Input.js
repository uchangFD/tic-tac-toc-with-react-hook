import React from "react";

function Input({ size, onChange }) {
  return (
    <>
      <input
        type="text"
        defaultValue="3"
        onChange={({ target }) => {
          onChange(target.value);
        }}
      />
    </>
  );
}

export default Input;
