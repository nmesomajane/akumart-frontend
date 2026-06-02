import React from "react";

interface InputProps {
  isOpen: boolean;
}
const HamburgerIcon: React.FC<InputProps> = ({ isOpen }) => {
  const listStyles =
    "h-[3px] w-6 bg-[#23232F] duration-300 transform transition-transform";

  return (
    <div className="relative flex flex-col items-end">
      <div id="left" className={`${listStyles} ${isOpen && "rotate-45"}`}></div>
      <div
        id="hide"
        className={`${listStyles} mt-1 ${isOpen && "hidden"}`}
      ></div>
      <div
        id="right"
        className={`${listStyles} ${
          isOpen ? "-rotate-45 absolute top-0" : "mt-1"
        }`}
      ></div>
    </div>
  );
};

export default HamburgerIcon;
