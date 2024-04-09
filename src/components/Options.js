import React from "react";

const Options = (props) => {
  const { description, icon } = props;
  return (
    <div className="Options flex items-center h-30 w-50 m-20 p-3 justify-center border-4 border-gray">
      <img src={props.icon} alt="icon" className="h-12" />
      <h1 className="mt-4 ml-6">{props.description}</h1>
    </div>
  );
};

export default Options;
