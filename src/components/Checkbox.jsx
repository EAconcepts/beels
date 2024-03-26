import React, { useState } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { twMerge } from "tailwind-merge";

const Checkbox = ({ onChange, className }) => {
  const [checked, setChecked] = useState(false);
  const toggle = (Onchange) => {
    setChecked((prev) => !prev);
    onChange();
    console.log("toggled");
  };
  return (
    <div>
      {checked ? (
        <ImCheckboxChecked
          onClick={toggle}
          className={twMerge("", className)}
        />
      ) : (
        <ImCheckboxUnchecked
          onClick={toggle}
          className={twMerge("", className)}
        />
      )}
    </div>
  );
};

export default Checkbox;
