import { useState } from "react";

const FourthBoxes = (props) => {
  const { heading, content } = props;
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
      } fourth-box border-2 border-gray-400 p-5`}
      onClick={handleClick}
    >
      <div className="box">
        <div className="heading">{props.heading}</div>
        <div className="box-content">{props.content}</div>
      </div>
    </div>
  );
};
export default FourthBoxes;
