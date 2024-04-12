import React from "react";
import { useState } from "react";

const Options = (props) => {
  const { description, icon } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      className={`border ${
        isClicked
          ? "border-yellow-600 border-10 border-solid shadow-slate-700"
          : "border-gray-400"
      } Options flex items-center h-30 w-50 m-20 p-3 justify-center border-6 border-gray p-4`}
      onClick={handleClick}
    >
      <img src={props.icon} alt="icon" className="h-12" />
      <h1 className="mt-4 ml-6">{props.description}</h1>
    </div>
  );
};

export default Options;
